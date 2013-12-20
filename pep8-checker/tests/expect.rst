PEP8 checker
============

The PEP8 checker will check any modified files in your working directory.

Example output:

.. expectation::
    :from: 01
    :to: 02

    ▾  pep8-checker

    ⚠  line 2: celcius.py
        import string, sys
         - E401 multiple imports on one line

    ⚠  line 5: celcius.py
        if len(sys.argv)==1:
         - E225 missing whitespace around operator

    ⚠  line 11: celcius.py
        try:
         - W291 trailing whitespace

    ⚠  line 12: celcius.py
        fahrenheit=float(string.atoi(i))
         - E225 missing whitespace around operator

    ⚠  line 14: celcius.py
        print repr(i), "not a numeric value"
         - W191 indentation contains tabs

    ⚠  line 14: celcius.py
        print repr(i), "not a numeric value"
         - E101 indentation contains mixed spaces and tabs

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - W191 indentation contains tabs

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E101 indentation contains mixed spaces and tabs

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E225 missing whitespace around operator

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ⚠  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ⚠  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - W191 indentation contains tabs

    ⚠  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - E101 indentation contains mixed spaces and tabs

    ⚠  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - E226 missing whitespace around arithmetic operator

By default, the messages will be warning. You can change them to stop messages
by adjusting the settings for the plugin.

.. plugin-settings::

    default_type = stop

.. expectation::
    :from: 01
    :to: 02

    ▾  pep8-checker

    ✕  line 2: celcius.py
        import string, sys
         - E401 multiple imports on one line

    ✕  line 5: celcius.py
        if len(sys.argv)==1:
         - E225 missing whitespace around operator

    ✕  line 11: celcius.py
        try:
         - W291 trailing whitespace

    ✕  line 12: celcius.py
        fahrenheit=float(string.atoi(i))
         - E225 missing whitespace around operator

    ✕  line 14: celcius.py
        print repr(i), "not a numeric value"
         - W191 indentation contains tabs

    ✕  line 14: celcius.py
        print repr(i), "not a numeric value"
         - E101 indentation contains mixed spaces and tabs

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - W191 indentation contains tabs

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E101 indentation contains mixed spaces and tabs

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E225 missing whitespace around operator

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ✕  line 16: celcius.py
        celsius=(fahrenheit-32)*5.0/9.0
         - E226 missing whitespace around arithmetic operator

    ✕  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - W191 indentation contains tabs

    ✕  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - E101 indentation contains mixed spaces and tabs

    ✕  line 17: celcius.py
        print '%i\260F = %i\260C' % (int(fahrenheit), int(celsius+.5))
         - E226 missing whitespace around arithmetic operator

And if we fix the errors that are listed, the plugin is quiet.

.. expectation::
    :from: 02
    :to: 03

Turning off the character limit
-------------------------------

Normally the pep8-checker will complain about lines that are too long.

.. expectation::
    :from: 03
    :to: 04

    ▾  pep8-checker

    ⚠  line 18: celcius.py
        print 'Your result, which I have gladly prepared is %i\260F = %i\260C' % (int(fahrenheit), int(celsius + .5))
         - E501 line too long (117 > 79 characters)

But this can be turned off.

.. plugin-settings::

    report_e501 = no

.. expectation::
    :from: 03
    :to: 04
