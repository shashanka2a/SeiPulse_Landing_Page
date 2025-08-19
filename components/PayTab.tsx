import React, { useState } from 'react';
import { ArrowLeft, QrCode, Users, Zap, Shield, AlertTriangle, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';

type PaymentStep = 'amount' | 'recipient' | 'confirm' | 'success';

export const PayTab: React.FC = () => {
  const [step, setStep] = useState<PaymentStep>('amount');
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [note, setNote] = useState('');
  const [isRequest, setIsRequest] = useState(false);

  const resetFlow = () => {
    setStep('amount');
    setAmount('');
    setRecipient('');
    setNote('');
  };

  const handleBack = () => {
    if (step === 'amount') return;
    if (step === 'recipient') setStep('amount');
    if (step === 'confirm') setStep('recipient');
    if (step === 'success') resetFlow();
  };

  const AmountStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">{isRequest ? 'Request Money' : 'Send Money'}</h2>
        <p className="text-muted-foreground">Enter the amount</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center space-x-2 mb-6">
          <Button 
            variant={!isRequest ? "default" : "outline"}
            onClick={() => setIsRequest(false)}
            className="rounded-full px-6"
          >
            Send
          </Button>
          <Button 
            variant={isRequest ? "default" : "outline"}
            onClick={() => setIsRequest(true)}
            className="rounded-full px-6"
          >
            Request
          </Button>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold mb-2">
            $<input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent border-none outline-none text-center w-32"
              placeholder="0"
              autoFocus
            />
          </div>
          <p className="text-muted-foreground">Available: $2,847.32</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-8">
          {[10, 25, 50, 100, 250, 500].map((preset) => (
            <Button 
              key={preset}
              variant="outline" 
              onClick={() => setAmount(preset.toString())}
              className="h-12"
            >
              ${preset}
            </Button>
          ))}
        </div>
      </div>

      <Button 
        className="w-full h-12" 
        disabled={!amount || parseFloat(amount) <= 0}
        onClick={() => setStep('recipient')}
      >
        Continue
      </Button>
    </div>
  );

  const RecipientStep = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Send to</h2>
        <p className="text-muted-foreground">Enter @handle, phone, or scan QR</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="recipient">Recipient</Label>
          <Input 
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="@username, phone, or email"
            className="h-12"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-12">
            <QrCode className="mr-2" size={20} />
            Scan QR
          </Button>
          <Button variant="outline" className="h-12">
            <Users className="mr-2" size={20} />
            Contacts
          </Button>
        </div>

        <div>
          <Label htmlFor="note">Note (optional)</Label>
          <Input 
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="What's this for?"
            className="h-12"
          />
        </div>

        {/* Recent Recipients */}
        <div>
          <Label>Recent</Label>
          <div className="space-y-2 mt-2">
            {['@alexc', '@sarah', '@mike'].map((handle) => (
              <button
                key={handle}
                onClick={() => setRecipient(handle)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div className="text-left">
                  <p className="font-medium">User Name</p>
                  <p className="text-sm text-muted-foreground">{handle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Button 
        className="w-full h-12" 
        disabled={!recipient}
        onClick={() => setStep('confirm')}
      >
        Continue
      </Button>
    </div>
  );

  const ConfirmStep = () => {
    const riskLevel = Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low';
    
    return (
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Confirm Payment</h2>
          <p className="text-muted-foreground">Review the details</p>
        </div>

        {/* AI Risk Assessment */}
        <Card className={`p-4 border-l-4 ${
          riskLevel === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-950' :
          riskLevel === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-950' :
          'border-l-green-500 bg-green-50 dark:bg-green-950'
        }`}>
          <div className="flex items-start space-x-3">
            <div className={`p-1 rounded-full ${
              riskLevel === 'high' ? 'bg-red-500' :
              riskLevel === 'medium' ? 'bg-yellow-500' :
              'bg-green-500'
            }`}>
              {riskLevel === 'high' ? (
                <AlertTriangle size={16} className="text-white" />
              ) : riskLevel === 'medium' ? (
                <Zap size={16} className="text-white" />
              ) : (
                <Shield size={16} className="text-white" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <p className="font-medium">AI Security Check</p>
                <Badge variant={riskLevel === 'high' ? 'destructive' : riskLevel === 'medium' ? 'default' : 'secondary'}>
                  {riskLevel.toUpperCase()} RISK
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {riskLevel === 'high' 
                  ? 'Unusual activity detected. This recipient is new to your network.'
                  : riskLevel === 'medium'
                  ? 'Moderate confidence. Consider verifying with recipient.'
                  : 'Safe transaction. Recipient verified and trusted.'
                }
              </p>
            </div>
          </div>
        </Card>

        {/* Payment Details */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
              <div>
                <p className="font-medium">User Name</p>
                <p className="text-muted-foreground">{recipient}</p>
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">${amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Fee</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Arrives</span>
                <span className="font-medium">Instantly</span>
              </div>
              {note && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Note</span>
                  <span className="font-medium">{note}</span>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Button 
          className="w-full h-12 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
          onClick={() => setStep('success')}
        >
          {isRequest ? 'Send Request' : 'Send Payment'}
        </Button>
      </div>
    );
  };

  const SuccessStep = () => (
    <div className="text-center space-y-6 py-8">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <Check size={40} className="text-white" />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {isRequest ? 'Request Sent!' : 'Payment Sent!'}
        </h2>
        <p className="text-muted-foreground">
          {isRequest 
            ? `Request for $${amount} sent to ${recipient}`
            : `$${amount} sent to ${recipient}`
          }
        </p>
      </div>

      <Card className="p-4 text-left">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Transaction ID</span>
            <span className="font-mono text-sm">TXN-2024-001234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Time</span>
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <Button className="w-full h-12" onClick={resetFlow}>
          Send Another
        </Button>
        <Button variant="outline" className="w-full h-12">
          View Receipt
        </Button>
      </div>
    </div>
  );

  return (
    <div className="p-4 h-full">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-6 pt-4">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft size={20} />
        </Button>
        <div className="flex-1 bg-border rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ 
              width: step === 'amount' ? '25%' : 
                     step === 'recipient' ? '50%' : 
                     step === 'confirm' ? '75%' : '100%' 
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-sm mx-auto">
        {step === 'amount' && <AmountStep />}
        {step === 'recipient' && <RecipientStep />}
        {step === 'confirm' && <ConfirmStep />}
        {step === 'success' && <SuccessStep />}
      </div>
    </div>
  );
};