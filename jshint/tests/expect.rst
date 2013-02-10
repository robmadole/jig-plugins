JSHint
======

JSHint is a community-driven tool to detect errors and potential problems in
JavaScript code and to enforce your team's coding conventions.

It is very flexible so you can easily adjust it to your particular coding
guidelines and the environment you expect your code to execute in.

This plugin uses Node.js and JSHint to format messages about the quality of
the code in JavaScript files.

If we leave a semicolon off a line, that's the kind of thing that JSHint will catch.

.. expectation::
    :from: 01
    :to: 02

    ▾  jshint

    ⚠  line 2: a.js
            var test = 1
        Missing semicolon. @ chr 17

    ⚠  line 1: a.js
        Unused variable: main

    ⚠  line 2: a.js
        Unused variable: test

    Ran 1 plugin
        Info 0 Warn 3 Stop 0

Fixing this problem quiets things down.

.. expectation::
    :from: 02
    :to: 03

    Ran 1 plugin, nothing to report

It will ignore any file that doesn't end in ``.js``

.. expectation::
    :from: 03
    :to: 04

    Ran 1 plugin, nothing to report

And one of the unit tests that passes from the JSHint project passes just fine
in this plugin as well.

.. expectation::
    :from: 04
    :to: 05

    Ran 1 plugin, nothing to report

One of the failing tests shows each error.

.. expectation::
    :from: 05
    :to: 06

    ▾  jshint

    ⚠  line 4: strict_violations.js
            function returnthis() { return this; }
        Possible strict violation. @ chr 36

    ⚠  line 7: strict_violations.js
            function callCallee() { return arguments.callee; }
        Strict violation. @ chr 52

    ⚠  line 8: strict_violations.js
            function callCaller() { return arguments.caller; }
        Strict violation. @ chr 52

    ⚠  line 4: strict_violations.js
        Unused variable: returnthis

    ⚠  line 5: strict_violations.js
        Unused variable: Returnthis

    ⚠  line 7: strict_violations.js
        Unused variable: callCallee

    ⚠  line 8: strict_violations.js
        Unused variable: callCaller

    Ran 1 plugin
        Info 0 Warn 7 Stop 0

Can find only warning about unused variables.

.. expectation::
    :from: 06
    :to: 07

    ▾  jshint

    ⚠  line 1: unused.js
        Unused variable: a

    ⚠  line 15: unused.js
        Unused variable: foo

    ⚠  line 20: unused.js
        Unused variable: bar

    ⚠  line 7: unused.js
        Unused variable: c

    ⚠  line 6: unused.js
        Unused variable: f

    ⚠  line 21: unused.js
        Unused variable: i

    Ran 1 plugin
        Info 0 Warn 6 Stop 0
