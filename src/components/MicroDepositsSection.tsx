import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Building2, TrendingUp, Calendar, Star } from "lucide-react";
import { NavigationContext } from "../App";
import { BankLogo } from "./BankLogos";

const bankOffers = [
  {
    id: 1,
    bankName: "State Bank of India",
    scheme: "SBI Recurring Deposit",
    logoKey: "SBI" as const,
    minAmount: 100,
    interestRate: 7.25,
    tenure: "1-10 years",
    features: ["Auto-debit facility", "Premature closure allowed", "Loan against RD"],
    rating: 4.5,
    popular: true
  },
  {
    id: 2,
    bankName: "HDFC Bank",
    scheme: "HDFC Smart RD",
    logoKey: "HDFC" as const,
    minAmount: 500,
    interestRate: 7.10,
    tenure: "6 months - 10 years",
    features: ["NetBanking access", "SMS alerts", "Interest compounded quarterly"],
    rating: 4.4,
    popular: false
  },
  {
    id: 3,
    bankName: "ICICI Bank",
    scheme: "ICICI Recurring Deposit",
    logoKey: "ICICI" as const,
    minAmount: 200,
    interestRate: 7.00,
    tenure: "6 months - 10 years",
    features: ["Mobile banking", "Auto-renewal", "Nomination facility"],
    rating: 4.3,
    popular: false
  },
  {
    id: 4,
    bankName: "Union Bank of India",
    scheme: "Union RD Scheme",
    logoKey: "Union Bank" as const,
    minAmount: 10,
    interestRate: 7.35,
    tenure: "6 months - 10 years",
    features: ["Micro deposits from ₹10", "Rural focus", "Agent assisted"],
    rating: 4.2,
    popular: true
  }
];

export function MicroDepositsSection() {
  const { setNavigation } = useContext(NavigationContext);

  const handleStartRD = (bankName: string) => {
    // For demo purposes, open signup modal
    setNavigation({ showSignupModal: true });
  };

  const handleLearnMore = (bankName: string) => {
    // For demo purposes, show alert with bank info
    alert(`Learn more about ${bankName} offerings. In a real app, this would open a detailed view.`);
  };

  const handleNotifyMe = () => {
    alert("You'll be notified when new bank schemes are available!");
  };

  return (
    <section id="deposits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4">
            <TrendingUp className="size-4" />
            Micro Deposits Marketplace
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Compare & Choose from Multiple Banks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your savings journey with as little as ₹10/day. Browse through verified bank schemes 
            and find the perfect recurring deposit that matches your financial goals.
          </p>
        </div>

        {/* Bank Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {bankOffers.map((offer) => (
            <Card key={offer.id} className="relative border hover:shadow-lg transition-shadow">
              {offer.popular && (
                <Badge className="absolute -top-2 right-4 bg-green-500 hover:bg-green-600">
                  Popular Choice
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <BankLogo bankKey={offer.logoKey} size="md" />
                    <div>
                      <CardTitle className="text-lg">{offer.bankName}</CardTitle>
                      <p className="text-sm text-gray-600">{offer.scheme}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{offer.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{offer.interestRate}%</div>
                    <div className="text-xs text-gray-600">Interest Rate</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">₹{offer.minAmount}</div>
                    <div className="text-xs text-gray-600">Min. Amount</div>
                  </div>
                </div>

                {/* Tenure */}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="size-4" />
                  <span>Tenure: {offer.tenure}</span>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-900">Key Features:</div>
                  <ul className="space-y-1">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleStartRD(offer.bankName)}
                  >
                    Start DigiDabba
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleLearnMore(offer.bankName)}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="p-6 bg-gradient-to-r from-blue-50 to-green-50 border-0">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-600">
                We're constantly adding new bank partners. Get notified when new schemes are available.
              </p>
              <Button 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
                onClick={handleNotifyMe}
              >
                Notify Me
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}