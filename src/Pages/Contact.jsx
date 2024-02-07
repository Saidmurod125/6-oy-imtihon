import Phone from "./phone";

export default function Contact() {
  return (
    <main className="container mx-auto flex-1 xl:px-[60px]">
      <div className="flex flex-col gap-4 border-b pb-[30px] pt-[50px]  md:items-center lg:flex-row lg:justify-between">
        <h1 className="title">Contact Us</h1>
        <p className="text-dark-300 max-w-[600px] xl:max-w-[650px] xl:text-[17px]">
          Welcome to SkillBridge Contact page, where we offer two comprehensive
          options to cater to your needs: Free and Pro. We believe in providing
          flexible and affordable pricing options for our services. Whether
          you`re an individual looking to enhance your skills or a business
          seeking professional development solutions, we have a plan that suits
          you. Explore our pricing options below and choose the one that best
          fits your requirements.
        </p>
      </div>
      <Phone />
    </main>
  );
}
