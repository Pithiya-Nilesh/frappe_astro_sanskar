import frappe

@frappe.whitelist(allow_guest=True)
def set_data(self):

    # print("\n\n adsfasdfasdf", self, "\n\n")
    # frappe.publish_realtime('demo', message="asdfasdfasdf")
    # abc = frappe.publish_realtime('demo', message="asdfasdfasdf")
    # frappe.publish_realtime(event='demo', user='Administrator', message="this is asdfa sdf  asdf asdf asdfasdf")
    # # return "asdfa"

    frappe.publish_realtime(
        event="latest_chat_updates",
        message={"msg": self.message, "u": self.user},
        user='Administrator',
    )
