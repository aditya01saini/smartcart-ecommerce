
import { createUserTable } from "../models/userTable.js";
import { createProductTable } from "../models/productTable.js";
import { createProductReviewTable } from "../models/productReviewsTable.js";
import { createOrdersTable } from "../models/ordersTable.js";

import { createOrderItemTable } from "../models/orderItemsTable.js";

import { createShippingInfoTable } from "../models/shippinginfoTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";

export const createTables = async () => {
  try {
    await createUserTable();
    await createProductTable();
    await createProductReviewTable();

    await createOrdersTable();
    await createOrderItemTable();
    await createShippingInfoTable();
    await createPaymentsTable();
    console.log("All table created successfully.")
  } catch (error) {
    console.error("Error creating table:", error);
  }
};
