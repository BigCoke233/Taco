/**
 * 页脚
 * 
 * @returns jsx
 */

import Link from 'next/link'

export default function Footer() {
    return (
      <footer id="footer" className="text-center text-gray-500 text-sm flex justify-between
      p-5 md:p-0">
        <section id="copyright">
          <p>&copy; 2019-2023 Eltrac</p>
        </section>
        <section id="icp">
          <p><Link href="https://beian.miit.gov.cn/" target="_blank">渝 ICP 备 2023014837 号</Link></p>
        </section>
        <section id="info" className="hidden md:block">
          <p>Powered by Taco</p>
        </section>
      </footer>
    )
}