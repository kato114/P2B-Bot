import * as crypto from "crypto-browserify";

import assert from "assert-browserify";
import { Buffer } from "buffer";

export const aesDecrypt = (encryptedText, secret) => {
  const parts = secret.split(":");
  assert(parts.length == 2);
  const key = Buffer.from(parts[0], "base64");
  const iv = Buffer.from(parts[1], "base64");

  console.log("key", parts[0]);
  console.log("iv", parts[1]);

  // Create a new AES cipher object for decryption
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);

  // Decrypt the encrypted message
  let decrypted = decipher.update(encryptedText, "base64", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
};
