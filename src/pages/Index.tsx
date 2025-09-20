import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calculatorAmount, setCalculatorAmount] = useState('');
  const [calculatorPeriod, setCalculatorPeriod] = useState('12');
  const [calculatorRate, setCalculatorRate] = useState('8.5');

  const calculateProfit = () => {
    const amount = parseFloat(calculatorAmount) || 0;
    const months = parseInt(calculatorPeriod) || 12;
    const rate = parseFloat(calculatorRate) / 100 || 0.085;
    
    const monthlyRate = rate / 12;
    const compound = Math.pow(1 + monthlyRate, months);
    const finalAmount = amount * compound;
    const profit = finalAmount - amount;
    
    return {
      finalAmount: finalAmount.toFixed(0),
      profit: profit.toFixed(0)
    };
  };

  const { finalAmount, profit } = calculateProfit();

  const deposits = [
    {
      title: "Классический",
      rate: "8.5%",
      period: "12 месяцев",
      minAmount: "50 000 ₽",
      features: ["Ежемесячные выплаты", "Пополнение разрешено", "Досрочное закрытие"],
      popular: false
    },
    {
      title: "Максимальный доход",
      rate: "10.2%",
      period: "24 месяца",
      minAmount: "100 000 ₽",
      features: ["Капитализация процентов", "Максимальная ставка", "Премиум обслуживание"],
      popular: true
    },
    {
      title: "Стартовый",
      rate: "7.8%",
      period: "6 месяцев",
      minAmount: "10 000 ₽",
      features: ["Низкий порог входа", "Гибкие условия", "Быстрое оформление"],
      popular: false
    }
  ];

  const investments = [
    {
      title: "Консервативный портфель",
      return: "+12.5%",
      risk: "Низкий",
      description: "Облигации и стабильные акции",
      icon: "Shield"
    },
    {
      title: "Сбалансированный портфель",
      return: "+18.7%",
      risk: "Средний",
      description: "Смешанные инвестиции",
      icon: "TrendingUp"
    },
    {
      title: "Агрессивный портфель",
      return: "+24.3%",
      risk: "Высокий",
      description: "Акции роста и стартапы",
      icon: "Zap"
    }
  ];

  const news = [
    {
      title: "ЦБ повысил ключевую ставку до 18%",
      time: "2 часа назад",
      category: "Монетарная политика",
      urgent: true
    },
    {
      title: "Рубль укрепился к доллару на 1.2%",
      time: "4 часа назад",
      category: "Валютный рынок",
      urgent: false
    },
    {
      title: "Новые налоговые льготы для ИИС",
      time: "6 часов назад",
      category: "Инвестиции",
      urgent: false
    },
    {
      title: "Инфляция замедлилась до 7.8%",
      time: "1 день назад",
      category: "Экономика",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                FinanceHub
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#deposits" className="text-gray-700 hover:text-blue-600 transition-colors">Вклады</a>
              <a href="#investments" className="text-gray-700 hover:text-blue-600 transition-colors">Инвестиции</a>
              <a href="#calculator" className="text-gray-700 hover:text-blue-600 transition-colors">Калькулятор</a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors">Новости</a>
              <Button>Войти</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Ваши деньги должны
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">
                    работать на вас
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Откройте вклад или начните инвестировать с доходностью до 24% годовых. 
                  Профессиональное управление вашими финансами.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6">
                  <Icon name="Calculator" className="mr-2" />
                  Рассчитать доходность
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Play" className="mr-2" />
                  Смотреть презентацию
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150K+</div>
                  <div className="text-sm text-gray-600">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₽50B</div>
                  <div className="text-sm text-gray-600">Под управлением</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">12 лет</div>
                  <div className="text-sm text-gray-600">На рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-scale-in">
                <img 
                  src="/img/ed693992-c5e6-4b87-9894-36c8e1577af0.jpg" 
                  alt="Financial investments" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Deposits Section */}
      <section id="deposits" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Банковские вклады</h3>
            <p className="text-xl text-gray-600">Надежные вклады с гарантированной доходностью</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deposits.map((deposit, index) => (
              <Card key={index} className={`relative transition-all duration-300 hover:scale-105 hover:shadow-xl ${deposit.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {deposit.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-1">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{deposit.title}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">{deposit.rate}</div>
                    <div className="text-gray-600">{deposit.period}</div>
                    <div className="text-sm text-gray-500">от {deposit.minAmount}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {deposit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={deposit.popular ? "default" : "outline"}>
                    Открыть вклад
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investments Section */}
      <section id="investments" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Инвестиционные портфели</h3>
            <p className="text-xl text-gray-600">Профессиональное управление вашими инвестициями</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <Card key={index} className="transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Icon name={investment.icon as any} size={24} className="text-white" />
                    </div>
                    <Badge variant={investment.risk === 'Низкий' ? 'secondary' : investment.risk === 'Средний' ? 'default' : 'destructive'}>
                      {investment.risk}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{investment.title}</CardTitle>
                  <div className="text-2xl font-bold text-green-600 mb-2">{investment.return}</div>
                  <p className="text-gray-600 text-sm">{investment.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    Инвестировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор доходности</h3>
              <p className="text-xl text-gray-600">Рассчитайте потенциальную прибыль от ваших инвестиций</p>
            </div>
            <Card className="p-8 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сумма инвестиций (₽)
                    </label>
                    <Input
                      type="number"
                      placeholder="100000"
                      value={calculatorAmount}
                      onChange={(e) => setCalculatorAmount(e.target.value)}
                      className="text-lg py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Срок (месяцев)
                    </label>
                    <Tabs value={calculatorPeriod} onValueChange={setCalculatorPeriod}>
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="6">6 мес</TabsTrigger>
                        <TabsTrigger value="12">12 мес</TabsTrigger>
                        <TabsTrigger value="24">24 мес</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ожидаемая доходность (% годовых)
                    </label>
                    <Input
                      type="number"
                      step="0.1"
                      value={calculatorRate}
                      onChange={(e) => setCalculatorRate(e.target.value)}
                      className="text-lg py-3"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Результат расчета</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Начальная сумма:</span>
                      <span className="font-semibold">{parseInt(calculatorAmount || '0').toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Прибыль:</span>
                      <span className="font-semibold text-green-600">+{parseInt(profit).toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600">Итоговая сумма:</span>
                      <span className="text-2xl font-bold text-blue-600">{parseInt(finalAmount).toLocaleString()} ₽</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-green-600">
                    Начать инвестировать
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Финансовые новости</h3>
            <p className="text-xl text-gray-600">Актуальная информация о рынках и экономике</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {news.map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={item.urgent ? "destructive" : "secondary"} className="mb-2">
                    {item.category}
                  </Badge>
                  {item.urgent && (
                    <Icon name="AlertTriangle" size={16} className="text-red-500" />
                  )}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{item.title}</h4>
                <div className="flex items-center text-sm text-gray-500">
                  <Icon name="Clock" size={14} className="mr-1" />
                  {item.time}
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Icon name="ExternalLink" className="mr-2" />
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={16} className="text-white" />
                </div>
                <h5 className="text-xl font-bold">FinanceHub</h5>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные финансовые услуги для роста ваших сбережений.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продукты</h6>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Вклады</li>
                <li className="hover:text-white cursor-pointer transition-colors">Инвестиции</li>
                <li className="hover:text-white cursor-pointer transition-colors">ИИС</li>
                <li className="hover:text-white cursor-pointer transition-colors">Пенсионное планирование</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Поддержка</h6>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Центр помощи</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-white cursor-pointer transition-colors">Тарифы</li>
                <li className="hover:text-white cursor-pointer transition-colors">Безопасность</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Компания</h6>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Карьера</li>
                <li className="hover:text-white cursor-pointer transition-colors">Блог</li>
                <li className="hover:text-white cursor-pointer transition-colors">Пресс-центр</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 FinanceHub. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;