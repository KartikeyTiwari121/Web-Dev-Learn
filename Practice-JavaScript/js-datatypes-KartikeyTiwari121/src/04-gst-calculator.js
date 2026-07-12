/**
 * 🧾 GST Calculator - Tax Lagao Bhai!
 *
 * Bunty apni dukaan ke liye GST calculator bana raha hai. Customer ko bill
 * dena hai jisme base price, GST amount, aur total clearly dikhna chahiye.
 * GST rate category ke hisaab se change hota hai.
 *
 * GST Rates (by category string, case-insensitive):
 *   - "essential"   => 0% GST  (dal, chawal, atta, etc.)
 *   - "food"        => 5% GST  (packaged food, restaurant below Rs 7500)
 *   - "standard"    => 12% GST (processed food, business class tickets)
 *   - "electronics" => 18% GST (phones, laptops, etc.)
 *   - "luxury"      => 28% GST (cars, aerated drinks, tobacco)
 *   - Any other category => return null
 *
 * Rules:
 *   - Calculate: gstAmount = amount * rate / 100
 *   - Calculate: totalAmount = amount + gstAmount
 *   - Round gstAmount aur totalAmount to 2 decimal places using
 *     parseFloat(value.toFixed(2))
 *   - Return object: { baseAmount, gstRate, gstAmount, totalAmount }
 *   - category ko lowercase mein compare karo (case-insensitive)
 *   - Hint: Use toFixed(), parseFloat(), Number.isFinite(), toLowerCase()
 *
 * Validation:
 *   - Agar amount positive finite number nahi hai, return null
 *   - Agar category string nahi hai, return null
 *   - Agar category unknown hai, return null
 *
 * @param {number} amount - Base amount before tax
 * @param {string} category - Product category
 * @returns {{ baseAmount: number, gstRate: number, gstAmount: number, totalAmount: number } | null}
 *
 * @example
 *   calculateGST(1000, "electronics")
 *   // => { baseAmount: 1000, gstRate: 18, gstAmount: 180, totalAmount: 1180 }
 *
 *   calculateGST(500, "essential")
 *   // => { baseAmount: 500, gstRate: 0, gstAmount: 0, totalAmount: 500 }
 */
export function calculateGST(amount, category) {
  let allCategories = [
  ["essential", 0],
  ["food", 5],
  ["standard", 12],
  ["electronics", 18],
  ["luxury", 28]
];
  if(!Number.isFinite(amount)|| typeof category !== 'string' || amount <=0){
    return null;
  }
  let baseAmount = amount;
  let gstRate = 0, gstAmount = 0, totalAmount = 0;
  let match = allCategories.find((current)=>{
    return current[0] === category.toLowerCase();
  })
  
  //if no match found then .find() will give undefined, which is an falsy value and !falsy will be true so if will executes and return null
  if(!match){
    return null;
  }

  gstRate = match[1];
  gstAmount = (baseAmount * gstRate) / 100;
  gstAmount = parseFloat(gstAmount.toFixed(2));
  totalAmount = baseAmount + gstAmount;
  totalAmount = parseFloat(totalAmount.toFixed(2));
  return { baseAmount, gstRate, gstAmount, totalAmount };
}
