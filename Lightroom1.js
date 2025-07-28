// Xoá prefix 'while (1) {}' nếu có
let body = $response.body.replace(/while\s*\(1\)\s*\{\}\s*/, "");

// Parse JSON
let obj = JSON.parse(body);

// Sửa trạng thái thành 'subscriber'
if (obj.entitlement) {
  obj.entitlement.status = "subscriber";
}

obj.avatar = { placeholder: true };

body = JSON.stringify(obj);
$done({ body });