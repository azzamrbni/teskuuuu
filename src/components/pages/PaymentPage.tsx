import { ArrowLeft, CreditCard, Check, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { useState } from 'react';

type Page = 'discover' | 'books' | 'summary' | 'library' | 'premium' | 'about' | 'profile' | 'settings' | 'collections' | 'collection-detail' | 'read-summary' | 'payment';

interface PaymentPageProps {
  selectedPlan: {
    name: string;
    price: string;
    period: string;
    originalPrice?: string;
  } | null;
  onNavigate: (page: Page) => void;
}

const paymentMethods = [
  { id: 'credit-card', name: 'Credit Card', icon: '💳' },
  { id: 'gopay', name: 'GoPay', icon: '🟢' },
  { id: 'ovo', name: 'OVO', icon: '🟣' },
  { id: 'dana', name: 'DANA', icon: '🔵' },
  { id: 'bank-transfer', name: 'Bank Transfer', icon: '🏦' },
];

export function PaymentPage({ selectedPlan, onNavigate }: PaymentPageProps) {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  if (!selectedPlan) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">No plan selected</p>
          <Button
            onClick={() => onNavigate('premium')}
            className="mt-4 bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
          >
            Choose a Plan
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    alert('Payment processing... (This is a demo)');
  };

  return (
    <div className="min-h-screen py-12 bg-[#FAFAFA] dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => onNavigate('premium')}
          variant="ghost"
          className="mb-6 text-gray-600 dark:text-gray-400"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Plans
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h1 className="text-3xl text-gray-900 dark:text-white mb-2">
                Complete Your Payment
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Secure checkout powered by Stripe
              </p>

              <form onSubmit={handleSubmit}>
                {/* Payment Method Selection */}
                <div className="mb-8">
                  <Label className="text-base mb-4 block">Payment Method</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`relative flex items-center space-x-3 border rounded-xl p-4 cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? 'border-[#E3762B] bg-[#FDC448]/5'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === method.id
                            ? 'border-[#E3762B]'
                            : 'border-gray-300 dark:border-gray-600'
                        }`}>
                          {paymentMethod === method.id && (
                            <div className="w-3 h-3 rounded-full bg-[#E3762B]" />
                          )}
                        </div>
                        <span className="text-2xl">{method.icon}</span>
                        <span className="text-gray-900 dark:text-white">{method.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credit Card Form */}
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative mt-2">
                        <Input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          maxLength={19}
                          className="pl-10"
                          required
                        />
                        <CreditCard
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cardName">Cardholder Name</Label>
                      <Input
                        id="cardName"
                        type="text"
                        placeholder="John Doe"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date</Label>
                        <Input
                          id="expiryDate"
                          type="text"
                          placeholder="MM/YY"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(e.target.value)}
                          maxLength={5}
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          maxLength={4}
                          className="mt-2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* E-Wallet Instructions */}
                {(paymentMethod === 'gopay' || paymentMethod === 'ovo' || paymentMethod === 'dana') && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <p className="text-sm text-blue-900 dark:text-blue-200">
                      You will be redirected to {paymentMethods.find(m => m.id === paymentMethod)?.name} to complete your payment.
                    </p>
                  </div>
                )}

                {/* Bank Transfer Instructions */}
                {paymentMethod === 'bank-transfer' && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                    <p className="text-sm text-blue-900 dark:text-blue-200 mb-2">
                      After clicking "Complete Payment", you'll receive bank transfer instructions via email.
                    </p>
                    <p className="text-xs text-blue-800 dark:text-blue-300">
                      Payment confirmation usually takes 1-2 business days.
                    </p>
                  </div>
                )}

                <Separator className="my-8" />

                {/* Security Notice */}
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <ShieldCheck className="text-green-600" size={20} />
                  <span>Your payment information is secure and encrypted</span>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900 h-12 text-base"
                >
                  <Lock className="mr-2" size={18} />
                  Complete Payment
                </Button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 sticky top-24">
              <h2 className="text-xl text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Plan</span>
                  <span className="text-gray-900 dark:text-white">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Billing Period</span>
                  <span className="text-gray-900 dark:text-white">{selectedPlan.period}</span>
                </div>
                {selectedPlan.originalPrice && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Original Price</span>
                    <span className="text-gray-500 dark:text-gray-400 line-through">
                      {selectedPlan.originalPrice}
                    </span>
                  </div>
                )}
              </div>

              <Separator className="my-6" />

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg text-gray-900 dark:text-white">Total</span>
                <span className="text-2xl text-gray-900 dark:text-white">{selectedPlan.price}</span>
              </div>

              {/* Features Included */}
              <div className="bg-[#FDC448]/5 rounded-xl p-4 border border-[#FDC448]/20">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Included in your plan:
                </p>
                <ul className="space-y-2">
                  {['Unlimited access to all books', 'Offline reading', 'Ad-free experience', 'Priority support'].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Check className="text-[#E3762B]" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  🔒 30-day money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}