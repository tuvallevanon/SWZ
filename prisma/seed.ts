
/* Seed demo data for SWZ */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding...')
  // Demo users
  const coach = await prisma.user.upsert({
    where: { email: 'coach@swz.fit' },
    update: {},
    create: { email: 'coach@swz.fit', name: 'Zo Coach', role: 'coach' }
  })
  const alice = await prisma.user.upsert({
    where: { email: 'alice@demo.com' },
    update: {},
    create: { email: 'alice@demo.com', name: 'Alice', role: 'client' }
  })
  const beth = await prisma.user.upsert({
    where: { email: 'beth@demo.com' },
    update: {},
    create: { email: 'beth@demo.com', name: 'Beth', role: 'client' }
  })

  await prisma.profile.createMany({
    data: [
      { userId: alice.id, stage: 'postpartum', postpartumWeeks: 6, cSection: false },
      { userId: beth.id, stage: 'pregnancy', trimester: 2, cSection: false }
    ],
    skipDuplicates: true
  })

  // Exercises
  const exercises = [
    ["Box Squat","https://youtu.be/dQw4w9WgXcQ","Sit to box, ribs down","Avoid bearing down"],
    ["Elevated Push-up","","Hands on box, body tight","Stop if doming"],
    ["Dead Bug","","Exhale on reach","Support with pillow if needed"],
    ["Bird Dog","","Long spine","No pain"],
    ["Glute Bridge","","Exhale to lift","Stop if pressure"],
    ["Band Row","","Elbows to ribs",""],
    ["Farmer Carry","","Short distance, stacked ribs/pelvis",""],
    ["Split Squat to Box","","Tap box, upright",""],
    ["Heel Slides","","Slow, exhale",""],
    ["Pallof Press","","Resist rotation",""]
  ]
  const ex = await Promise.all(exercises.map(([name, videoUrl, coachingNotes, postpartumCautions]) =>
    prisma.exercise.create({ data: { name, videoUrl, coachingNotes, postpartumCautions } })
  ))

  const program = await prisma.program.create({
    data: { name: "Weeks 0–6 (Restore)", description: "Gentle intro", stageTag: "postpartum", createdBy: coach.id }
  })

  const w1 = await prisma.workout.create({
    data: { programId: program.id, dayIndex: 1, title: "Day 1", notes: "Breathe + basics" }
  })
  // Add a few items
  await prisma.workoutExercise.createMany({
    data: [
      { workoutId: w1.id, exerciseId: ex[0].id, order: 1, targetReps: 8 },
      { workoutId: w1.id, exerciseId: ex[4].id, order: 2, targetReps: 10 },
      { workoutId: w1.id, exerciseId: ex[9].id, order: 3, targetReps: 8 }
    ]
  })

  console.log('Done.')
}

main().finally(()=>prisma.$disconnect())
