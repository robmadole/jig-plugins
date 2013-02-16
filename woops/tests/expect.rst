woops
======

This plugin is intended to catch some of the sillier things we as developers
when we are either in a hurry or haven't reviewed our code carefully enough.

The name "woops" comes from the common response when someone tells you that
you accidentally committed a file that contains the following:

The plugin is heavily inspired by George Bandl's work with
https://bitbucket.org/birkenfeld/hgcodesmell.

* debugger;
* console.log
* Python debugger pdb.set_trace()
* print
* Windows newline on non-Windows platforms
* Looks for Vim stuff (:wq in your text)
* Merge markers (>>>>>>> and <<<<<<<)

First let's see how it catches Vim stuff. This typically happens when a Vim
user is in insert mode and they attempt to save and quit. The command for this
in Vi/Vim is ``:wq``.

Vim users aren't perfect
~~~~~~~~~~~~~~~~~~~~~~~~

.. expectation::
    :from: 01
    :to: 02

    ▾  woops

    ⚠  line 1: README
        vim command

Debugger, prints, and consoles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A common thing when debugging Javascript or Python is to leave a ``debugger;``
or ``pdb.set_trace()``.

.. expectation::
    :from: 02
    :to: 03

    ▾  woops

    ⚠  line 6: a.py
        pdb.set_trace()

    ⚠  line 3: b.js
        javascript debugger

This one is a little contraversial. It detects ``print`` or ``sprint``
statements. There are plenty of valid use cases where ``print`` is perfectly
valid but it's also a tool used by Python programmers when they are debugging.

This will catch either the statement (Python 2.x) or the function (Python 3.x).

.. expectation::
    :from: 03
    :to: 04

    ▾  woops

    ⚠  line 8: a.py
        print statement

    ⚠  line 9: a.py
        print statement

We can do a similar thing for Javascript. When developers use ``console.log``
it is generally for debugging as well.

.. expectation::
    :from: 04
    :to: 05

    ▾  woops

    ⚠  line 5: b.js
        javascript console usage

Windows newlines
~~~~~~~~~~~~~~~~

It can detect Windows newlines.

.. expectation::
    :from: 05
    :to: 06

    ▾  woops

    ⚠  README
        Contains Windows newlines

But it can be turned off easily by editing the settings.

.. plugin-settings::

    check_windows_newlines = no

.. expectation::
    :from: 05
    :to: 06

Merge markers
~~~~~~~~~~~~~

Lastly, it will find merge markers. These occur when you have a conflicted file

.. plugin-settings::

    check_windows_newlines = no

.. expectation::
    :from: 06
    :to: 07

    ▾  woops

    ⚠  line 3: README
        merge marker

    ⚠  line 7: README
        merge marker

Binary files
~~~~~~~~~~~~

Binary files are ignored because whitespace really isn't relevant for them.

.. expectation::
    :from: 07
    :to: 08

Limiting the number of messages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we have a lot of messages for a single file, stop at a certain threshold.

.. expectation::
    :from: 08
    :to: 09

    ▾  woops

    ⚠  b.js
        Lots of woops here (over 50) ignoring
