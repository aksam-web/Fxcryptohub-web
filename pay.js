const stripe = require('stripe')('your_stripe_secret_key');

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: 'price_ABC123', quantity: 1 }],
    success_url: 'https://your-site.com/success',
    cancel_url: 'https://your-site.com/cancel',
  });

  res.redirect(303, session.url);
});
