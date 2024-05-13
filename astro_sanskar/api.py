import frappe

@frappe.whitelist(allow_guest=True)
def send_form_failed_notification(message):
    frappe.sendmail(
        recipients=["nilesh@sanskartechnolab.com"], 
        sender="sanskartechnolabtest@gmail.com",
        subject="test",
        template="send_form_failed_notification_email_template",
        args={
            "page_name": "test page",                
            "host_name": frappe.utils.get_url(),

            # "first_name": full_name,
            # "email": email,
            # "phone": phone,
            # "message": message,
            # "enquiry_source": enquiry_source,
            # "demo_for": demoForValue,
            # "query_type": queryTypeValue,
            "message" : message
        },now=True)
