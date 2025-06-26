export const metadata = {
  title: "About",
  description: "About me",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <p className="mb-4">
        I'm a solar project engineer turned software developer with a deep
        interest in how systems work under the hood. Before I pivoted to
        software, I was creating utility interconnection strategies for
        commercial solar projects and debugging solar inverters in the field.
        That early exposure to how physical infrastructure runs (and
        occasionally breaks) sparked a lasting curiosity about the mechanics
        behind everything, from distributed energy systems to modern web apps.
        <br />
        <br />
        That same curiosity led me into software. I wanted to understand how
        tools worked at the process level, how data moved through systems, how
        abstractions were built and where they broke down. I transitioned from
        project engineering into full-time software development, bringing with
        me a desire to build tools that are both technically sound and grounded
        in the realities of real-world use.
        <br />
        <br />
        At PowerFlex, I contributed to full-stack software development in
        support of EV charging, solar, and battery storage projects. I built
        services that enabled users to control distributed energy assets,
        visualize asset metric data, and reduce time spent troubleshooting.
        Working on these solutions strengthened my understanding of how software
        can drive efficiency and reliability in clean energy systems.
        <br />
        <br />
        Outside of work, I spend time on music production and sound design,
        where I enjoy experimenting with how various components influence and
        shape sound. Lately, I’ve been exploring sound design through the lens
        of code, finding creative ways to combine my interests in software and
        music.
        <br />
        <br />
        My focus now is on projects where software doesn't just live in the
        cloud but interacts with physical systems and human workflows. I'm
        interested in the friction points and how thoughtful engineering can
        help clear the path.
      </p>
    </section>
  );
}
