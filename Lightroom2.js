let body = $response.body;
let obj = JSON.parse(body);

// Giả lập gói trả phí
if (obj.commerce_profile?.subscriptions?.length > 0) {
  obj.commerce_profile.subscriptions[0].status = "ACTIVE";

  obj.commerce_profile.subscriptions[0].offer_details[0].product_arrangement = {
    code: "PA-9999",
    name: "CCI_INDIVIDUAL_PREMIUM"
  };

  obj.commerce_profile.subscriptions[0].source.type = "PAID_ENTITLEMENT";
}

body = JSON.stringify(obj);
$done({ body });