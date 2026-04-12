import { Language, translations } from '../utils/locale';
import { formatSAR } from '../utils/currency';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Star, TrendingUp } from 'lucide-react';

interface CashbackSectionProps {
  lang: Language;
}

export function CashbackSection({ lang }: CashbackSectionProps) {
  const isRTL = lang === 'ar';
  const t = translations[lang];
  
  const rewards = [
    { id: 1, title: lang === 'ar' ? 'مكافأة رمضان' : 'Ramadan Bonus', amount: 10, date: lang === 'ar' ? 'أمس' : 'Yesterday' },
    { id: 2, title: lang === 'ar' ? 'استرداد نقدي' : 'Cashback Reward', amount: 5, date: lang === 'ar' ? 'منذ 3 أيام' : '3 days ago' },
    { id: 3, title: lang === 'ar' ? 'مكافأة الترحيب' : 'Welcome Bonus', amount: 25, date: lang === 'ar' ? 'منذ أسبوع' : '1 week ago' },
  ];
  
  return (
    <div className="p-4 pb-24 space-y-6">
      <Card className="border-gray-300 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Star className="w-5 h-5 fill-gray-900 text-gray-900" />
            {t.earnCashback}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="gray-200"
                  strokeWidth="8"
                  className="stroke-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="352"
                  strokeDashoffset="176"
                  className="stroke-gray-900"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900">50%</span>
                <span className="text-xs text-gray-600">{lang === 'ar' ? 'مكتمل' : 'Complete'}</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {lang === 'ar' ? 'تحويل 500 ر.س إضافي للحصول على المكافأة' : 'Transfer 500 more SAR to unlock bonus'}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          {t.recentRewards}
        </h2>
        <div className="space-y-3">
          {rewards.map((reward) => (
            <Card key={reward.id} className="border-gray-300 shadow-sm">
              <CardContent className="p-4">
                <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{reward.title}</p>
                      <p className="text-sm text-gray-600">{reward.date}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-gray-900">
                    +{formatSAR(reward.amount, lang)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}