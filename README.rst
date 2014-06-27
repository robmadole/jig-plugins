Ruby Reek
=========

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png?branch=reek

This plugin is written for the `Jig tool`_.

What does it do?
----------------

Uses the `Reek code smell detector`_ to find stinky Ruby code.

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

    $ jig plugin add http://github.com/robmadole/jig-plugins@reek

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
.. _Reek code smell detector: https://github.com/troessner/reek
