Drupal
======
Integration of Drupal with the Click & Pledge Payment Processing API & Salesforce CRM

CONTENTS OF THIS FILE
---------------------
* Introduction
* Requirements
* Installation
* Configuration
* How It Works
* Troubleshooting



INTRODUCTION
------------
This module integrates Commerce_cnp online payments into
the Drupal Commerce payment and checkout systems.


* For a full description of the module, visit the project page:
  
* To submit bug reports and feature suggestions, or to track changes:
  https://forums.clickandpledge.com/forum/platform-product-forums/3rd-party-integrations/drupal-commerce


REQUIREMENTS
------------
This module requires the following:
* Submodules of Drupal Commerce package (https://drupal.org/project/commerce)
  - Commerce core
  - Commerce Payment (and its dependencies)



INSTALLATION
------------
* download the module from below link,


CONFIGURATION
-------------
* Create a new Commerce_cnp payment gateway.
  Administration > Commerce > Configuration > Payment gateways > Add payment gateway
  - Enable CnP Money Redirect
  - Set Payment mode (Test or Live)

*  Commerce_cnp settings available:
   - Administration > Commerce >CnP Payment Settings


HOW IT WORKS
------------
* General considerations:  
  - Customers should have a valid credit card.

* Checkout workflow:
  It follows the Drupal Commerce Credit Card workflow.
  The customer should enter his/her credit card data

TROUBLESHOOTING
---------------
* No troubleshooting pending for now.