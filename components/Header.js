/**
 * 页眉
 * 
 * @returns jsx
 */

import Image from 'next/image'

export default function Header({ title = "你好世界。", subtitle = "Hello World.", banner = "https://eltrac.s3.bitiful.net/20231107-banner.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=J8LAwCEW7bKh3rIKprdQYmyf%2F20231107%2F%2Fs3%2Faws4_request&X-Amz-Date=20231107T044121Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=1e75fd4187904cc0bfed14e355ef4d8d1a141835d59a4394768214a04a2e4dc6" }) {
    return (
      <header className="relative">
        <section id="banner" className="py-12 md:px-16">
          <Image src={banner} width={1200} height={400} 
          className="object-cover object-bottom h-80" />
        </section>
        <section id="title" className="absolute bottom-5 right-5 bg-lime-800 text-white p-5">
          <h1 className="text-4xl font-bold tracking-wider drop-shadow-md">{title}</h1>
          <p className="mt-2">{subtitle}</p>
        </section>
      </header>
    )
  }