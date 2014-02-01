Python McCabe
=============

It will check modified Python files and will warn you if the complexity
is above the default of 8.

Example output:

.. expectation::
    :from: 01
    :to: 02

    ▾  python-mccabe

    ⚠  line 2: widget.py
        'widget' complexity is 8

But if we change the warning threshold to something larger, it will skip it.

.. plugin-settings::

    warn_threshold = 10

.. expectation::
    :from: 01
    :to: 02

Changing the warning and the stop threshold to much lower results in only the
stop message being reported.

.. plugin-settings::

    warn_threshold = 1
    stop_threshold = 2

.. expectation::
    :from: 01
    :to: 02

    ▾  python-mccabe

    ✕  line 2: widget.py
        'widget' complexity is 8

Multiple function
-----------------

If we reduce the complexity of the function below the default of 8 we will not
get any messages.

.. expectation::
    :from: 02
    :to: 03

But reducing the threshold again results in all three function being reported.

.. plugin-settings::

    warn_threshold = 1

.. expectation::
    :from: 02
    :to: 03

    ▾  python-mccabe

    ⚠  line 2: widget.py
        'widget_foo' complexity is 3

    ⚠  line 7: widget.py
        'widget_bar' complexity is 3

    ⚠  line 12: widget.py
        'widget' complexity is 3
