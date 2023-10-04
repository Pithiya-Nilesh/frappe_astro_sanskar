# Copyright (c) 2023, asdf and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document
from astro_sanskar.www.aaa.demo import set_data

class message(Document):
	def before_save(self):
		set_data(self)
