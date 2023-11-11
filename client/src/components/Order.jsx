import Navbar from "./Navbar";
const Order = () => {
    document.title = "Sharmita Mondal | Order";
    return (
        <>
            <Navbar />
            <div className="container order col-lg-6 col-sm-8 p-3">
                <form action="https://formspree.io/f/xnqkrvoo"
                    method="POST">
                    <div className="mb-3">
                        <label for="Name" className="form-label">Your Name</label>
                        <input name="Name" type="text" autoComplete="off" className="form-control" id="Name" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input name="email" autoComplete="off" type="email" className="form-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone no.</label>
                        <input name="phone" autoComplete="off" type="number" className="form-control" id="phone" />
                    </div>
                    <div className="mb-3">
                    <select name="paper size" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Paper Size</option>
  <option value="1">A4</option>
  <option value="2">A3</option>
  <option value="3">A2</option>
  <option value="4">A1</option>
  <option value="5">A0</option>
  <option value="6">Other</option>
</select>
                    </div>
                    <div className="mb-3">
                    <select name="sketch color" class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option selected>Sketch type</option>
  <option value="1">Black & White</option>
  <option value="2">Colour</option>
  <option value="3">Other</option>
 
</select>
                    </div>
                    <div class="mb-3">
  <textarea name="description" class="form-control" placeholder="Your order description." id="floatingTextarea"></textarea>
</div>

                    <button name="submit" type="submit" className="btn btn-primary" onClick={(e)=>{
                        window.confirm("Your order is successful.")
                    }}>Order</button>
                </form>
            </div>
        </>
    );

}
export default Order;