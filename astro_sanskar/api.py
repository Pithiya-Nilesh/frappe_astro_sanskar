import frappe

# @frappe.whitelist(allow_guest=True)
# def check():
#     frappe.publish_realtime(
#             event="latest_chat_updates",
#             message="message",
#             user="user",
#         )


frappe.publish_realtime('demo', data={'key': 'value'})
