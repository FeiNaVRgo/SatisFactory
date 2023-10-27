ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('testing_only')
    .itemInputs('gtceu:copper_single_wire', 'gtceu:nickel_single_wire')
    .itemOutputs('2x gtceu:cupronickel_single_wire')
    .inputFluids(Fluid.of('minecraft:lava', 1000))
    .duration(90)
    .EUt(6000000)
})