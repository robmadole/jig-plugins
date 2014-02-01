Jig Plugins
===========

.. image:: https://api.travis-ci.org/robmadole/jig-plugins.png

This repo contains a collection of plugins written for the `Jig tool`_.

Available plugins
-----------------

| Name           | Purpose                                                | Language   |
| -------------- | ------------------------------------------------------ | ---------: |
| woops          | Catch silly errors                                     | All        |
| whitespace     | Keep whitespace nice and clean                         | All        |
| pep8-checker   | Check sources files for PEP8 adherence                 | Python     |
| pyflakes       | Use PyFlakes to lint Python files                      | Python     |
| python-mccabe  | Calculate code complexity using McCabe                 | Python     |
| jshint         | Run the jshint tool on you JavaScript files            | JavaScript |
| chucknorris    | Learn something new about Chuck Norris on each commit  | Humor      |

Convenient install lists
------------------------

The following files can be used to install multiple plugins at the same time.

For any language
  https://raw.github.com/robmadole/jig-plugins/lists/common.txt

Python
  https://raw.github.com/robmadole/jig-plugins/lists/python.txt

JavaScript
  https://raw.github.com/robmadole/jig-plugins/lists/javascript.txt

To use these plugins
--------------------

Install Jig first:

::

    $ pip install jig || easy_install jig

And then you can setup your Git repository to use Jig with this:

::

    $ cd myrepo
    $ jig init .

Follow the instructions to install any of the Jig plugins.

`Read the Jig documentation to find out more <http://packages.python.org/jig>`_.

.. _Jig tool: http://github.com/robmadole/jig
