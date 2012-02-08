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

    ⚠  line 14: celcius.py
        print repr(i), "not a numeric value"
         - W191 indentation contains tabs

    ⚠  line 14: celcius.py
        print repr(i), "not a numeric value"
         - E101 indentation contains mixed spaces and tabs

    Ran 1 plugin
        Info 0 Warn 5 Stop 0

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

    ✕  line 14: celcius.py
        print repr(i), "not a numeric value"
         - W191 indentation contains tabs

    ✕  line 14: celcius.py
        print repr(i), "not a numeric value"
         - E101 indentation contains mixed spaces and tabs

    Ran 1 plugin
        Info 0 Warn 0 Stop 5

And if we fix the errors that are listed, the plugin is quiet.

.. expectation::
    :from: 02
    :to: 03

    Ran 1 plugin, nothing to report
