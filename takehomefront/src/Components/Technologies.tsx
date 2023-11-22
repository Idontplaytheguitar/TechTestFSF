import { Tech } from './Tech';

export function Technologies() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 align-middle min-h-[400px] ">
      <Tech
        image="https://vitejs.dev/logo.svg"
        link="https://vitejs.dev/"
        text="Vite.js"
        className="hover:shadow-yellow-300/80"
      />
      <Tech
        image="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png"
        link="https://react.dev/"
        text="React"
        className="hover:shadow-blue-400/80"
      />
      <Tech
        image="https://docs.nestjs.com/assets/logo-small.svg"
        link="https://docs.nestjs.com/"
        text="Nest.js"
        className="hover:shadow-red-600/80"
      />
      <Tech
        image="https://avatars.githubusercontent.com/u/139895814"
        link="https://ui.shadcn.com/"
        text="Shadcn.ui"
        className="hover:shadow-slate-300/50"
      />
      <Tech
        image="https://scontent.faep25-1.fna.fbcdn.net/v/t39.30808-6/299463877_560030875914611_8025210373789510385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE-Iq1jvPWY6yFFcQOwg_OFXyjiulHN1tJfKOK6Uc3W0tFIkZV1-n7Y-L9zoTUwpzPBkAcK1qsjfS4Iur2fOYag&_nc_ohc=YXMkM1-VoFkAX83zXrB&_nc_ht=scontent.faep25-1.fna&oh=00_AfDnxHQZ4-HeJTeb9wL5REE_kuR0v7euCgQ5Bu7i905Glw&oe=65629377"
        link="https://tailwindcss.com/"
        text="Tailwindcss"
        className="hover:shadow-blue-700/80"
      />
    </div>
  );
}
