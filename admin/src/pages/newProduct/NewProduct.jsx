import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            // onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple"
            // onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Department</label>
          <input
            name="desc"
            type="text"
            placeholder="department..."
            // onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            // onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100$"
            // onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Rating</label>
          <input
            name="rating"
            type="number"
            placeholder="1-5"
            // onChange={handleChange}
          />
        </div>
        <button /*onChange={handleClick}*/ className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
