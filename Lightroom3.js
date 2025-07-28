let body = $response.body;
let obj = JSON.parse(body);

// Duyệt qua từng offer_group để sửa
for (let group of obj.offer_groups) {
  for (let product of group.products) {
    // Đánh dấu mọi gói là đã active
    product.product_active = true;
    product.free_trial_consumed = false;
    product.intro_offer_consumed = false;

    // Gán level cao nhất nếu chưa có
    if (!product.level) {
      product.level = "2";
    }
  }
}

body = JSON.stringify(obj);
$done({ body });