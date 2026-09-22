import re

file_path = 'src/pages/WAMtoGPA.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Enhance SEO Title and Description
content = content.replace(
    'title="WAM to GPA Calculator - Free WAM to GPA Converter (2026)"',
    'title="WAM to GPA Calculator | Convert Australian WAM to 4.0 & 7.0 GPA (2026)"'
)
content = content.replace(
    'description="WAM to GPA conversion in one click. Free WAM to GPA calculator for Uni - convert to 4.0 & 7.0 GPA for scholarships, postgrad & overseas apps. No signup."',
    'description="Free online WAM to GPA calculator for Australian university students. Instantly convert your Weighted Average Mark to a 4.0 or 7.0 GPA scale for graduate jobs, scholarships, and study abroad applications."'
)

# Enhance Hero Section
old_hero = """      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to GPA Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Free WAM to GPA conversion for the university students. Convert WAM to 4.0 and 7.0 GPA scales instantly.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need your overall WAM from units first? Use the{' '}
          <a href={absoluteUrl(wamToGpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaHome.keyword}</a>
          , then return here. Planning one subject&apos;s exam weighting? Open the{' '}
          <a href={absoluteUrl(wamToGpaFinal.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaFinal.keyword}</a>.
        </p>
      </section>"""

new_hero = """      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">WAM to GPA Calculator</h1>
        <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
          The most accurate <strong>WAM to GPA converter</strong> for Australian university students. 
          Instantly convert your Weighted Average Mark (WAM) to the standard <strong>4.0 GPA scale</strong> for international applications, 
          or the <strong>7.0 GPA scale</strong> used by domestic institutions.
        </p>
        <p className="text-blue-200 max-w-xl mx-auto text-sm mt-5 bg-blue-800/30 py-2 px-4 rounded-full border border-blue-600/50">
          Need to calculate your overall WAM first? Use our{' '}
          <a href={absoluteUrl(wamToGpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaHome.keyword}</a>
          , then return here. For exam targets, use the{' '}
          <a href={absoluteUrl(wamToGpaFinal.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaFinal.keyword}</a>.
        </p>
      </section>"""

content = content.replace(old_hero, new_hero)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced WAMtoGPA.tsx content successfully.")
