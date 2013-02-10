/**
 * Run the Jasmine tests and report on the output using PhantomJS.
 *
 * Usage:
 *
 *    phantomjs test-phantom.js http://127.0.0.1:8080/static/js/test.html
 *
 */
var TIMEOUT = 200000,
    page = new WebPage(),
    xunit = false,
    waitFor,
    reporter,
    reportTerminal,
    reportXunit;

/**
 * Waits until a test function returns true then calls onReady.
 *
 * Has an optional timeout in milliseconds that defaults to TIMEOUT.
 */
waitFor = function (testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 10001,
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log('Timeout after waiting ' + (TIMEOUT / 1000) + ' seconds');
                    phantom.exit(2);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 100); //< repeat check every 250ms
};

// Handle arguments
if (phantom.args.length < 1) {
    console.log('Usage: test-phantom.js URL');
    phantom.exit(1);
}

if (phantom.args.length == 2) {
    xunit = (phantom.args[1] == '--xunit') ? true : false;
}

/**
 * Report the test results to a terminal, useful for development.
 */
reportTerminal = function () {
    var results = page.evaluate(function () {
        var passed   = 0,
            skipped  = 0,
            failed   = 0,
            messages = [];

        $('.jasmine_reporter').find('.spec').each(function (_, spec) {
            var suites;

            if ($(spec).hasClass('passed')) {
                passed++;
            }
            if ($(spec).hasClass('skipped')) {
                skipped++;
            }
            if ($(spec).hasClass('failed')) {
                failed++;
                descriptions = $(spec).parents().children('a.description').get();

                descriptions.reverse();
                descriptions.push($(spec).find('a.description'));

                $(descriptions).each(function (index, description) {
                    var indent = Array(index * 2 + 1).join(' ');

                    messages.push(indent + '> ' + $(description).text());
                });

                messages.push($(spec).find('.messages').text());
            }
        });

        messages.push('Passed ' + passed + ', Skipped ' + skipped + ', Failed ' + failed);

        return {
            code     : (failed) ? 1 : 0,
            messages : messages
        }
    });

    console.log(results.messages.join('\n'));
    phantom.exit(results.code);
};

/**
 * Reports the test results in XML suitable for CI to understand.
 */
reportXunit = function () {
    var results = page.evaluate(function () {
        var total   = $('.spec').length,
            failed  = $('.spec.failed').length,
            skipped = $('.spec.skipped').length,
            xml     = [
                '<?xml version="1.0" encoding="UTF-8"?>\n',
                '<testsuite name="jasmine-tests" tests="' + total + '" errors="0"',' failures="' + failed + '" skip="' + skipped + '">\n',
            ];

        $('.spec.failed').each(function (k, v) {
            var el = $(v);
                className = el.parent('.suite').first().find('.description:first').text(),
                name = el.find('.description:first').text(),
                stack = ($('.stackTrace', el).length > 0) ?
                    $('.stackTrace', el).text() + '\n' :
                    '',
                message = $('.messages .resultMessage', el).text(),
                error = [
                    '<testcase classname="' + className + '" name="' + name + '" time="0">\n',
                    ' <error type="Assertion">\n ',
                    '  ', message, '\n', stack,
                    ' </error>\n',
                    '</testcase>'
                ];

            xml.push(error.join(''));
        })

        xml.push('</testsuite>');

        return {
            code     : (failed) ? 1 : 0,
            messages : xml
        }
    });

    console.log(results.messages.join('\n'));
    phantom.exit(results.code);
};

// Which reporter should we use?
reporter = (xunit) ? reportXunit : reportTerminal;

page.onConsoleMessage = function (msg) {
    console.log(msg);
}

page.onError = function (msg, trace) {
    console.log(msg);
}

page.viewportSize = {width: 1300, height: 800};

page.open(phantom.args[0], function (status) {
    waitFor(function () {
        return page.evaluate(function() {
            if ($('.finished-at').text() !== '') {
                return true;
            }
            return false;
        });
    }, function () {
        reporter();
    }, TIMEOUT);
});
