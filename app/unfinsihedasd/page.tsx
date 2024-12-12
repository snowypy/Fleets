import { GlowingBorder } from '@/components/animations';
import StaffCarousel from '@/components/staff-carousel';

export default function Page() {
    return (
      <div className="bg-black text-white">
        <main className="flex flex-col items-center pt-24">
          <GlowingBorder>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Apply for Staff</h2>
              <p className="mb-4">We are looking for dedicated individuals to join our team. Below are the requirements:</p>
              <ul className="list-disc list-inside mb-4">
                <li>Must be x years or older</li>
                <li>Have a passion for Sea of Thieves</li>
                <li>Be able to commit at least x hours a week</li>
                <li>Have good x skills</li>
              </ul>
              <a href="https://forms.gle/x-link" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Apply Now
              </a>
            </div>
          </GlowingBorder>
          <StaffCarousel />
        </main>
      </div>
    )
  }