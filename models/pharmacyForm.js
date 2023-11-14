const mongoose = require("mongoose");
const pharmacySchema = new mongoose.Schema({
    sl_no : Number,
    fy1 : Number,
    fy2 : Number,
    req_for : String,
    product_code : Number,
    details_existing_product : String,
    details_of_changes : String,
    specification : String,
    category : String,
    short_name : String,
    unit : String,
    desc_and_spec : String,
    shelf_life : String,
    prod_brief_justif : String,
    prod_complete_justif : String,
    pac_yes_no : String,
    manufactured_by : String,
    imported_by : String,
    suppl_distrib_details : String,
    manufactured_by1 : String,
    manufactured_by2 : String,
    rate_per_unit : String,
    price_ref : String,
    suggested_by : String,
    counter_signed_by : String,
    avg_monthly_consumption : String,
    file_quotation_lpr : String,
    file_pac_certif : String,
    file_manufacture_impoeter_supplier : String,
    file_prod_pack_photo : String,
    file_other_doc1 : String,
    file_other_doc2 : String,
    file_other_doc3 : String,
})

module.exports = mongoose.model("Pharmacy", pharmacySchema);