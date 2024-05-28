import frappe, json

@frappe.whitelist(allow_guest=True)
# def send_form_failed_notification(full_name="", email="", phone="", message="", enquiry_source="", demoForValue="", queryTypeValue="", ip="", browser_name="", device="", response="", page_name=""):
def send_form_failed_notification(**kwargs):
    kwargs['host_name'] = frappe.utils.get_url()
    # print("\n\n asdf", json.loads(kwargs))
    frappe.enqueue('astro_sanskar.api.send_mail', queue='short', now=True, **kwargs)
    

def send_mail(**kwargs):
    frappe.sendmail(
        # recipients=["nilesh@sanskartechnolab.com"],
        recipients=["kamal@sanskartechnolab.com"],
        cc=["nilesh@sanskartechnolab.com", "saurabh@sanskartechnolab.com", "palak@sanskartechnolab.com"],
        sender="sanskartechnolabtest@gmail.com",
        subject=f"Failed: To Send Form Data From {kwargs['page_name']} To Sanskar ERP In Sanskar Technolab Website.",
        template="send_form_failed_notification_email_template",
        args={
            "data": kwargs
        },now=True)
    

# @frappe.whitelist(allow_guest=True)
# def send_form_failed_notification_from_chat(**kwargs):
#     kwargs['host_name'] = frappe.utils.get_url()
#     frappe.sendmail(
#         recipients=["nilesh@sanskartechnolab.com"],
#         # recipients=["kamal@sanskartechnolab.com"],
#         # cc=["nilesh@sanskartechnolab.com", "sahil@sanskartechnolab.com", "pooja@sanskartechnolab.com", "foram@sanskartechnolab.com"],
#         sender="sanskartechnolabtest@gmail.com",
#         subject=f"Failed To Send Form Data From {kwargs['page_name']} To Sanskar ERP In Sanskar Technolab Website.",
#         template="send_form_failed_notification_email_template_from_chat",
#         args={
#             "data": kwargs
#         },now=True)

