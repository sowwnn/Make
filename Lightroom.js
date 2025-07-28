// Xoá prefix 'while (1) {}' nếu có
let body = $response.body.replace(/while\s*\(1\)\s*\{\}\s*/, "");

// Parse JSON
let obj = JSON.parse(body);

// Sửa trạng thái thành 'subscriber'
if (obj.entitlement) {
  obj.entitlement.status = "subscriber";

  // Tăng giới hạn bộ nhớ (tuỳ chọn)
  obj.entitlement.storage.limit = 1099511627776;         // 1 TB
  obj.entitlement.storage.display_limit = 1099511627776;
  obj.entitlement.storage.warn = 992137445376;           // 925 GB
}

// (Tuỳ chọn) Giữ avatar nếu cần
obj.avatar = { placeholder: true };

// Convert lại thành JSON
body = JSON.stringify(obj);

// Trả kết quả về cho Shadowrocket
$done({ body });