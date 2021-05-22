const request = require("supertest");
const app = require("../index");

const mongoose = require("mongoose");

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/pizza-database`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

describe("Category Endpoints", () => {
  it("should create a new category", async () => {
    const res = await request(app).post("/api/category").send({
      name: "Bestsellers",
      description: "Bestsellers pizza",
    });
    expect(res.statusCode).toEqual(201);
  });
});
