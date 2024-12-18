from . import __version__ as app_version

app_name = "astro_sanskar"
app_title = "Astro Sanskar"
app_publisher = "asdf"
app_description = "asd"
app_email = "asdf"
app_license = "a"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/astro_sanskar/css/astro_sanskar.css"
# app_include_js = "/assets/astro_sanskar/js/astro_sanskar.js"

# include js, css files in header of web template
# web_include_css = "/assets/astro_sanskar/css/astro_sanskar.css"
# web_include_js = "/assets/astro_sanskar/js/astro_sanskar.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "astro_sanskar/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "astro_sanskar.utils.jinja_methods",
#	"filters": "astro_sanskar.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "astro_sanskar.install.before_install"
# after_install = "astro_sanskar.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "astro_sanskar.uninstall.before_uninstall"
# after_uninstall = "astro_sanskar.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "astro_sanskar.utils.before_app_install"
# after_app_install = "astro_sanskar.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "astro_sanskar.utils.before_app_uninstall"
# after_app_uninstall = "astro_sanskar.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "astro_sanskar.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
#	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
#	"*": {
#		"on_update": "method",
#		"on_cancel": "method",
#		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"astro_sanskar.tasks.all"
#	],
#	"daily": [
#		"astro_sanskar.tasks.daily"
#	],
#	"hourly": [
#		"astro_sanskar.tasks.hourly"
#	],
#	"weekly": [
#		"astro_sanskar.tasks.weekly"
#	],
#	"monthly": [
#		"astro_sanskar.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "astro_sanskar.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "astro_sanskar.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "astro_sanskar.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["astro_sanskar.utils.before_request"]
# after_request = ["astro_sanskar.utils.after_request"]

# Job Events
# ----------
# before_job = ["astro_sanskar.utils.before_job"]
# after_job = ["astro_sanskar.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"astro_sanskar.auth.validate"
# ]


website_route_rules = [
	
]

website_redirects = [
    # {"source": "/", "target": "/home"},
    {"source": "/rectjs-development-company", "target": "/"},
    {"source": "/checkout", "target": "/"},
    {"source": "/ecommerce-service", "target": "/"},
    {"source": "/inquiry.html", "target": "/contact-us"},
    {"source": "/web-design-service", "target": "/"},
    {"source": "/index", "target": "/"},
    {"source": "/haircare", "target": "/"},
    {"source": "/real-estate-solutions", "target": "/"},
    {"source": "/hire-reactjs-developer/inquiry.html", "target": "/"},
    {"source": "/hire-reactjs-developer/inquiry", "target": "/"},
    {"source": "/hire-reactjs-developer", "target": "/"},
    {"source": "/branding-and-digital-marketing", "target": "/"},
    {"source": "/hosting-and-server-security", "target": "/"},
    {"source": "/cca/digital-marketing-service", "target": "/"},
    {"source": "/vue-js-development-company/inquiry.html", "target": "/vue-js-development-company/inquiry"},
    {"source": "/ce/ecommerce-service", "target": "/"},
    {"source": "/hire-servicenow-developer/inquiry.html", "target": "/"},
    {"source": "/hire-servicenow-developer/inquiry", "target": "/"},
    {"source": "/cca/web-design-service", "target": "/"},
    {"source": "/education-management", "target": "/"},
    {"source": "/cca/hosting-and-server-security-service", "target": "/"},
    {"source": "/cca/mobile-app-service", "target": "/"},
    {"source": "/about-us/career.html", "target": "/about"},
    {"source": "/about-us", "target": "/about"},
    {"source": "/about-us/hotel-and-restaurant-solutions", "target": "/about"},
	{"source": "/mobile-app-development.php", "target": "/"},
	{"source": "/software-development-service", "target": "/"},
	{"source": "/workflow-management", "target": "/"},
	{"source": "/react-native-cross-platform-for-bank-app-development/inquiry.html", "target": "/"},
	{"source": "/react-native-cross-platform-for-bank-app-development", "target": "/"},
	{"source": "/hosting-and-server-security-service", "target": "/"},
	{"source": "/ce/hire-developer-service", "target": "/"},
	{"source": "/ce/web-design-service", "target": "/"},
	{"source": "/skincare", "target": "/"},
	{"source": "/ce/hosting-and-server-security-service", "target": "/"},
	{"source": "/ce/branding-and-graphics-service", "target": "/"},
	{"source": "/item", "target": "/"},
	{"source": "/inquiry", "target": "/contact-us"},
    {"source": "/contact", "target": "/contact-us"},
	{"source": "/sap_to_erpnext_migration", "target": "/sap-to-erpnext-migration"},
	{"source": "/jagdamba-textile", "target": "/garment-manufacturing-erp"},
	{"source": "/migoo-case-study", "target": "/construction-equipment-as-a-service"},
	{"source": "/healthcare", "target": "/healthcare-erp"},
    {"source": "/textile", "target": "/textile-erp"},
    {"source": "/retail", "target": "/retail-erp"},
    {"source": "/hr-payroll", "target": "/hrms-software"},
    {"source": "/manufacturing", "target": "/erpnext-manufacturing"},
    {"source": "/erpnext_indiamart_integration_product", "target": "/erpnext_indiamart_integration"},
    {"source": "/product-engineering", "target":"/product-developement-company"},
    {"source": "/quartz_manufacturers_and_exporters", "target": "/quartz-manufacturing-erp"},
    {"source": "/gramdharaa_gaushala", "target": "/ayurveda-manufacturing-erp"},
    {"source": "/textile-industry-erpnext-implementation", "target": "/garment-manufacturing-erp"}
    # {"source": "", "target": ""}
]

