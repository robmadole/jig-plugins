Python McCabe
=============

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=python-mccabe

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Uses `Florent Xicluna's library`_ to measure code complexity. The original
source came from `Ned Batchelder's implementation`_ using the McCabe code
complexity method.

Quick install
-------------

You need Jig to use these plugins. Install it with this:

::

    $ pip install jig || easy_install jig

And then you can setup your Git repository to use Jig with this:

::

    $ cd myrepo
    $ jig init .

Install the plugins:

::

    $ jig plugin add http://github.com/robmadole/jig-plugins@python-mccabe

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
.. _Ned Batchelder's implementation: http://nedbatchelder.com/blog/200803/python_code_complexity_microtool.html
.. _Florent Xicluna's library: https://github.com/flintwork/mccabe
