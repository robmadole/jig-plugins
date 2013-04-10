JSHint
======

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=jshint

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Runs the popular JavaScript linting tool, JSHint_.

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

    $ jig plugin add http://github.com/robmadole/jig-plugins@jshint

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _JSHint: http://www.jshint.com
.. _uses a tool: http://pypi.python.org/pypi/pep8
