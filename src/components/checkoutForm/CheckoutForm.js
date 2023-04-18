import React from "react";
import Card from "../card/Card";
import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
  return (
    <section>
      <div className={`container ${styles.checkout}`}>
        <h2>Checkout</h2>
        <form>
          <div>
            <Card cardClass={styles.card}>
              <CheckoutSummary />
            </Card>
          </div>
          <div>
            <Card cardClass={`${styles.card} ${styles.pay}`}>
              <h3>Stripe Checkout</h3>

              <button id="submit" className={styles.button}>
                <span id="button-text">Proceed To Checkout</span>
              </button>
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
