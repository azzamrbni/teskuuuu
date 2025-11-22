import { Mail, MessageCircle, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export function About() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Apa itu Kualala?',
      a: 'Kualala adalah platform ringkasan buku berbahasa Indonesia yang membantu kamu memahami isi buku terbaik dunia dalam waktu 10-15 menit.',
    },
    {
      q: 'Apakah ringkasan Kualala akurat?',
      a: 'Ya! Setiap ringkasan dibuat oleh tim kami yang membaca buku secara menyeluruh dan mengekstrak poin-poin penting dengan teliti.',
    },
    {
      q: 'Berapa banyak buku yang tersedia?',
      a: 'Saat ini kami memiliki 1000+ ringkasan buku dari berbagai kategori, dan terus bertambah setiap minggu.',
    },
    {
      q: 'Apakah ada versi gratisnya?',
      a: 'Ya! Kamu bisa akses 10 ringkasan per bulan secara gratis. Untuk akses unlimited, upgrade ke Premium.',
    },
    {
      q: 'Bagaimana cara request buku?',
      a: 'Kamu bisa kirim request melalui form kontak di bawah atau email ke team@kualala.com',
    },
    {
      q: 'Apakah saya bisa cancel langganan kapan saja?',
      a: 'Ya, kamu bisa cancel langganan kapan saja tanpa biaya tambahan. Akses premium akan tetap aktif sampai akhir periode langganan.',
    },
    {
      q: 'Bagaimana cara download ringkasan untuk offline?',
      a: 'Fitur download offline tersedia untuk member Premium. Kamu bisa download langsung dari halaman ringkasan buku.',
    },
    {
      q: 'Apakah pembayaran aman?',
      a: 'Sangat aman! Kami menggunakan sistem pembayaran terenkripsi dan tidak menyimpan data kartu kredit kamu.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Help & Support
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ada pertanyaan? Kami siap membantu kamu
          </p>
        </div>

        {/* Contact Form */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle className="text-[#E3762B]" size={28} />
              <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white">
                Hubungi Kami
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Punya pertanyaan, saran, atau feedback? Kami senang mendengar dari kamu!
            </p>
            
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-900 dark:text-white">Nama</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Nama kamu"
                  className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 dark:text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-900 dark:text-white">Pesan</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tulis pesan kamu di sini..."
                  className="mt-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FDC448] to-[#E3762B] hover:opacity-90 text-gray-900"
              >
                <Mail className="mr-2" size={18} />
                Kirim Pesan
              </Button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <HelpCircle size={20} className="text-[#E3762B] flex-shrink-0" />
                    <h3 className="text-lg text-gray-900 dark:text-white">
                      {faq.q}
                    </h3>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 flex-shrink-0 transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 pt-0 pl-14">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>Atau email langsung ke: <a href="mailto:hello@kualala.com" className="text-[#E3762B] hover:underline">hello@kualala.com</a></p>
        </div>
      </div>
    </div>
  );
}