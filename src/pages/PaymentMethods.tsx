import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, CreditCard, Building2, QrCode, Wallet, Check } from "lucide-react";

const PaymentMethods = () => {
  const paymentOptions = [
    {
      icon: Smartphone,
      title: "UPI Payment",
      description: "Pay instantly using Google Pay, PhonePe, Paytm, or any UPI app",
      features: ["Instant payment confirmation", "No transaction fees", "Secure & encrypted"],
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Scan QR code with any payment app to complete your transaction",
      features: ["Quick & contactless", "Works with all UPI apps", "No card details needed"],
    },
    {
      icon: CreditCard,
      title: "Cards",
      description: "Pay securely using Credit or Debit cards",
      features: ["Visa, Mastercard, RuPay accepted", "EMI options available", "Saved cards for quick checkout"],
    },
    {
      icon: Building2,
      title: "Net Banking",
      description: "Direct payment from your bank account",
      features: ["All major banks supported", "Secure bank portal", "Instant confirmation"],
    },
    {
      icon: Wallet,
      title: "Digital Wallets",
      description: "Pay using popular digital wallets",
      features: ["Paytm, PhonePe, Amazon Pay", "Cashback offers", "Quick one-tap payment"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Payment Methods</h1>
              <p className="text-lg text-muted-foreground">
                Choose from multiple secure payment options for your convenience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {paymentOptions.map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <option.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="mb-2">{option.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Security & Safety</h3>
                <p className="text-muted-foreground mb-4">
                  All payment methods on LocalLink are secured with industry-standard encryption. 
                  We never store your card details or banking information. Your payment data is processed 
                  through PCI DSS compliant payment gateways.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>256-bit SSL encryption for all transactions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Two-factor authentication available</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>24/7 fraud monitoring and prevention</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Full refund protection for eligible transactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentMethods;
