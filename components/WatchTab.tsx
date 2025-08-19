import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Eye, Star, Plus, BarChart3, PieChart, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Asset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  trending?: boolean;
}

interface NFTCollection {
  id: string;
  name: string;
  floorPrice: number;
  change24h: number;
  volume: string;
  items: number;
}

interface WalletData {
  address: string;
  name: string;
  balance: number;
  change24h: number;
  tokens: number;
  nfts: number;
}

const mockMemecoins: Asset[] = [
  { id: '1', name: 'SeiDoge', symbol: 'SDOGE', price: 0.000234, change24h: 45.2, marketCap: '$2.3M', volume: '$456K', trending: true },
  { id: '2', name: 'PepeToken', symbol: 'PEPE', price: 0.00000123, change24h: -12.5, marketCap: '$1.8M', volume: '$234K' },
  { id: '3', name: 'ShibaInu', symbol: 'SHIB', price: 0.0000087, change24h: 23.1, marketCap: '$4.2M', volume: '$789K', trending: true },
  { id: '4', name: 'DogeKing', symbol: 'DKING', price: 0.00456, change24h: -8.7, marketCap: '$892K', volume: '$123K' },
];

const mockNFTs: NFTCollection[] = [
  { id: '1', name: 'Sei Punks', floorPrice: 2.4, change24h: 15.3, volume: '45.2 SEI', items: 10000 },
  { id: '2', name: 'Space Cats', floorPrice: 1.8, change24h: -5.2, volume: '23.1 SEI', items: 5000 },
  { id: '3', name: 'Cyber Bears', floorPrice: 3.1, change24h: 28.7, volume: '67.8 SEI', items: 7500 },
];

const mockWallets: WalletData[] = [
  { address: 'sei1abc...def', name: 'Main Wallet', balance: 15234.56, change24h: 12.3, tokens: 25, nfts: 12 },
  { address: 'sei1xyz...789', name: 'Trading Wallet', balance: 8967.23, change24h: -3.2, tokens: 18, nfts: 5 },
];

export const WatchTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState('memecoins');
  const [watchlist, setWatchlist] = useState<string[]>(['1', '3']);

  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const MemecoinCard = ({ asset }: { asset: Asset }) => (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{asset.symbol[0]}</span>
          </div>
          <div>
            <p className="font-medium">{asset.name}</p>
            <p className="text-sm text-muted-foreground">{asset.symbol}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {asset.trending && (
            <Badge variant="secondary" className="text-xs">
              🔥 Trending
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => toggleWatchlist(asset.id)}
            className="h-8 w-8"
          >
            <Star 
              size={16} 
              className={watchlist.includes(asset.id) ? 'fill-yellow-400 text-yellow-400' : ''} 
            />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">${asset.price.toFixed(6)}</span>
          <div className={`flex items-center space-x-1 ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {asset.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="font-medium">{Math.abs(asset.change24h).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Market Cap</p>
            <p className="font-medium">{asset.marketCap}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Volume 24h</p>
            <p className="font-medium">{asset.volume}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  const NFTCard = ({ collection }: { collection: NFTCollection }) => (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
          <div>
            <p className="font-medium">{collection.name}</p>
            <p className="text-sm text-muted-foreground">{collection.items.toLocaleString()} items</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eye size={16} />
        </Button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{collection.floorPrice} SEI</span>
          <div className={`flex items-center space-x-1 ${collection.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {collection.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="font-medium">{Math.abs(collection.change24h).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="text-sm">
          <p className="text-muted-foreground">Volume 24h: {collection.volume}</p>
        </div>
      </div>
    </Card>
  );

  const WalletCard = ({ wallet }: { wallet: WalletData }) => (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="font-medium">{wallet.name}</p>
          <p className="text-sm text-muted-foreground font-mono">
            {wallet.address.slice(0, 8)}...{wallet.address.slice(-6)}
          </p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <BarChart3 size={16} />
        </Button>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${wallet.balance.toLocaleString()}</span>
          <div className={`flex items-center space-x-1 ${wallet.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {wallet.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span className="font-medium">{Math.abs(wallet.change24h).toFixed(1)}%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Tokens</p>
            <p className="font-medium">{wallet.tokens}</p>
          </div>
          <div>
            <p className="text-muted-foreground">NFTs</p>
            <p className="font-medium">{wallet.nfts}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-2xl font-bold mb-2">Watch</h1>
        <p className="text-muted-foreground">Track your favorite assets and wallets</p>
      </div>

      {/* AI Market Insights */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-0">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Activity size={16} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium mb-1">AI Market Insights</h3>
            <p className="text-sm text-muted-foreground">
              Memecoin sector showing +23% growth. SeiDoge trending due to community events. 
              NFT floor prices recovering across major collections.
            </p>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="memecoins">Memecoins</TabsTrigger>
          <TabsTrigger value="nfts">NFTs</TabsTrigger>
          <TabsTrigger value="wallets">Wallets</TabsTrigger>
        </TabsList>

        <TabsContent value="memecoins" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Trending Memecoins</h3>
            <Button variant="outline" size="sm">
              <Plus size={16} className="mr-2" />
              Add Token
            </Button>
          </div>
          
          <div className="space-y-3">
            {mockMemecoins.map((asset) => (
              <MemecoinCard key={asset.id} asset={asset} />
            ))}
          </div>

          {watchlist.length > 0 && (
            <>
              <h3 className="font-medium pt-4">Your Watchlist</h3>
              <div className="space-y-3">
                {mockMemecoins
                  .filter(asset => watchlist.includes(asset.id))
                  .map((asset) => (
                    <MemecoinCard key={asset.id} asset={asset} />
                  ))}
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="nfts" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Popular Collections</h3>
            <Button variant="outline" size="sm">
              <Plus size={16} className="mr-2" />
              Add Collection
            </Button>
          </div>
          
          <div className="space-y-3">
            {mockNFTs.map((collection) => (
              <NFTCard key={collection.id} collection={collection} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wallets" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Tracked Wallets</h3>
            <Button variant="outline" size="sm">
              <Plus size={16} className="mr-2" />
              Add Wallet
            </Button>
          </div>
          
          <div className="space-y-3">
            {mockWallets.map((wallet) => (
              <WalletCard key={wallet.address} wallet={wallet} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};