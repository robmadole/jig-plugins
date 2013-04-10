Pyflakes
========

The Pyflakes plugin will run pyflakes against any staged files and report any
messages to you.

It only works on Python files and ignore everything else.

.. expectation::
    :from: 01
    :to: 02

    ▾  pyflakes

    ⚠  line 1: a.py
        'sys' imported but unused

    ⚠  line 4: a.py
        local variable 'unused_variable' is assigned to but never used

If the file has a syntax error, it will report the problem to you.

.. expectation::
    :from: 02
    :to: 03

    ▾  pyflakes

    ✕  line 1: badsyntax.py
        invalid syntax

And if there are no errors with the file then nothing is reported.

.. expectation::
    :from: 03
    :to: 04
