$(document).ready(function() {
    // Gladiator PVE Stigmas
    $("#Crippling_Cut_VII").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_cripplingcut_g7.png");
        $("#PvP_Stigma_Text").text("Crippling Cut VII");
        $("#PvP_Stigma_Description").text("Inflicts 1185~1484 physical damage on a fallen enemy");
        $("#PvP_Stigma_Cooldown").text("Cooldown 18s");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 106");
    });

    $("#Lockdown_V").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_lockdownimpact_g5.png");
        $("#PvP_Stigma_Text").text("Lockdown V");
        $("#PvP_Stigma_Description").text("Inflicts 409~708 physical damage on the target. The target is bound for 3s.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 12s");
        // $("#PvP_Stigma_Manacost").text("Usage Cost MP 106");
    });

    $("#Berserking").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_berserkstance_g1.png");
        $("#PvP_Stigma_Text").text("Berserking I");
        $("#PvP_Stigma_Description").text("Increases Physical Attack by 80% for 30s while decreasing Accuracy by 200 and Physical Def by 50%.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 247");
    });

    $("#Tendon_Slice_III").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_kneecrash_g3.png");
        $("#PvP_Stigma_Text").text("Tendon Slice III");
        $("#PvP_Stigma_Description").text("Inficlts 996~1295 damage to the target and immobilizes it for 8s");
        $("#PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 212");
    });

    $("#Second_Wind_I").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_survivorstance_g1.png");
        $("#PvP_Stigma_Text").text("Second Wind I");
        $("#PvP_Stigma_Description").text("Recovers HP by 35% and increases Maximum HP by 35% and Strike Fortitude by 500 for 1m.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 298");
    });

    $("#Unwavering_Devotion_I").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_wa_steadiness_g1.png");
        $("#PvP_Stigma_Text").text("Unwavering Devotion I");
        $("#PvP_Stigma_Description").text("Increases your Stun, Knock Back, Stumble, Spin, and Aether's Hold Resists by 800 for 1m30s.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 79");
    });

    $("#Slaughter_I").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_blademode_g1.png");
        $("#PvP_Stigma_Text").text("Slaughter I");
        $("#PvP_Stigma_Description").text("Magical Acc is increased by 300. You deal an additional 25% damage when attacking a player.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 1s");
        //  $("#PvP_Stigma_Manacost").text("Usage Cost MP 79");
    });


    $("#Absorbing_Fury_IV").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_seismicdrain_g4.png");
        $("#PvP_Stigma_Text").text("Absorbing Fury IV");
        $("#PvP_Stigma_Description").text("Inflicts 654 ~ 953 physical damage on enemies with 7m of you and absorbs 50% of the damage as HP.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 10s");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 212");
    });

    $("#Exhausting_Wave_I").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_whirldrain_g1.png");
        $("#PvP_Stigma_Text").text("Exhausting Wave I");
        $("#PvP_Stigma_Description").text("Inflicts 397 - 696 physical damage on enemies within 7m of the caster and absorbs 20% of the damage as HP. Multicast 3 Times");
        $("#PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 109");
    });

    $("#Sharp_Strike_VI").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_sharpnesshit_g6.png");
        $("#PvP_Stigma_Text").text("Sharp Strike VI");
        $("#PvP_Stigma_Description").text("Inflicts 757~1056 damage to the target.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 16s");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 164");
    });

    $("#Advanced_Dual_Wielding_II").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_p_equip_dual_g2.png");
        $("#PvP_Stigma_Text").text("Advanced Dual Wielding II");
        $("#PvP_Stigma_Description").text("Allows you to use dual weapons skillfully.");
        //$("#PvP_Stigma_Cooldown").text("Cooldown 16s");
        // $("#PvP_Stigma_Manacost").text("Usage Cost MP 164");
    });

    $("#Piercing_Rupture_II").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_stigma_shockburst_g2.png");
        $("#PvP_Stigma_Text").text("Piercing Rupture II");
        $("#PvP_Stigma_Description").text("Deals 1543~1842 physical damage to up to 18 enemies within a 10m radius, and decreases their Physical Def by 600 for 30s.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 1m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 205");
    });

    //Gladiator Pve Replacments

    $("#Ankle_Snare").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_anklegrab_g1.png");
        $("#PvP_Stigma_Text").text("Ankle Snare I");
        $("#PvP_Stigma_Description").text("Immobilizes a target within 25m for 10s and decreases its Evasion by 1000.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 69");
    });

    $("#Severe_Weakening_Blow_VI").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_enfeeblehit_g6.png");
        $("#PvP_Stigma_Text").text("Severe Weakening Blow VI");
        $("#PvP_Stigma_Description").text("Inflicts 536 - 835 physical damage on the target. The target's Physical Def and Evasion are decreased by 400 and 400% respectively for 10s.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 126");
    });

    $("#Draining_Blow_III").hover(function() {
        $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_stigma_draincut_g3.png");
        $("#PvP_Stigma_Text").text("Draining Blow III");
        $("#PvP_Stigma_Description").text("Deals 872-1171 physical damage to a stumbled enemy and absorbs 100% of the damage as HP.");
        $("#PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvP_Stigma_Manacost").text("Usage Cost MP 156");
    });

    // $("#Piercing_Wave").hover(function() {
    //     $("#PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_shockimpulse_g1.png");
    //     $("#PvP_Stigma_Text").text("Piercing Wave I");
    //     $("#PvP_Stigma_Description").text("Inflicts 1058~1357 physical damage on up to 12 enemies within a 10m radius, and decreases their Physical Def by 500 for 30s.");
    //     $("#PvP_Stigma_Cooldown").text("Cooldown 1m");
    //     $("#PvP_Stigma_Manacost").text("Usage Cost MP 124");
    // });

    //Gladiator PVE Data

    $("#Lockdown_V_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_lockdownimpact_g5.png");
        $("#PvE_Stigma_Text").text("Lockdown V");
        $("#PvE_Stigma_Description").text("Inflicts 409~708 physical damage on the target. The target is bound for 3s.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 12s");
        // $("#PvP_Stigma_Manacost").text("Usage Cost MP 106");
    });

    $("#Berserking_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_berserkstance_g1.png");
        $("#PvE_Stigma_Text").text("Berserking I");
        $("#PvE_Stigma_Description").text("Increases Physical Attack by 80% for 30s while decreasing Accuracy by 200 and Physical Def by 50%.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 247");
    });
    $("#Severe_Weakening_Blow_VI_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_enfeeblehit_g6.png");
        $("#PvE_Stigma_Text").text("Severe Weakening Blow VI");
        $("#PvE_Stigma_Description").text("Inflicts 536 - 835 physical damage on the target. The target's Physical Def and Evasion are decreased by 400 and 400% respectively for 10s.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 126");
    });

    $("#Vengeful_Strike_VI").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_enfeeblehit_g6.png");
        $("#PvE_Stigma_Text").text("Vengeful Strike VI");
        $("#PvE_Stigma_Description").text("Upon successful parry, inflicts 1120~1419 damage to the target.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 27");
    });

    $("#Dauntless_Spirit_V").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_ragespirit_g5.png");
        $("#PvE_Stigma_Text").text("Dauntless_Spirit_V");
        $("#PvE_Stigma_Description").text("For 10s, a protective shield absorbs damage with a 100% chance whenever you are hit by attack. The protective shield remains until 548 damage is absorbed.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 134");
    });

    $("#Spite_Strike_VI").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_technicalcounter_g6.png");
        $("#PvE_Stigma_Text").text("Spite Strike VI");
        $("#PvE_Stigma_Description").text("Upon successful parry, inflicts 843~1142 damage to the target and puts it in the Stumbled state.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 327");
    });
    $("#Advanced_Dual_Wielding_II_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_p_equip_dual_g2.png");
        $("#PvE_Stigma_Text").text("Advanced Dual Wielding II");
        $("#PvE_Stigma_Description").text("Allows you to use dual weapons skillfully.");
        //$("#PvP_Stigma_Cooldown").text("Cooldown 16s");
        // $("#PvP_Stigma_Manacost").text("Usage Cost MP 164");
    });

    $("#Sharp_Strike_VI_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_sharpnesshit_g6.png");
        $("#PvE_Stigma_Text").text("Sharp Strike VI");
        $("#PvE_Stigma_Description").text("Inflicts 757~1056 damage to the target.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 16s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 164");
    });

    $("#Vicious_Blow_IV").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_vorpalhit_g4.png");
        $("#PvE_Stigma_Text").text("Vicious Blow IV");
        $("#PvE_Stigma_Description").text("Inflicts 997~1296 damage on the target.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 16s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 215");
    });
    $("#Whirling_Strike_III").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_jumpattack_g3.png");
        $("#PvE_Stigma_Text").text("Whirling Strike III");
        $("#PvE_Stigma_Description").text("Inflicts 748~752 damage by dashing to the target within a 15m radius.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 80");
    });

    $("#Draining_Sword_II").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_drainsword_g2.png");
        $("#PvE_Stigma_Text").text("Draining Sword II");
        $("#PvE_Stigma_Description").text("Inflicts 1084~1383 damage to the target and has a chance to absorb 50% of the damage as HP.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 16s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 159");
    });

    $("#Second_Wind_I_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_survivorstance_g1.png");
        $("#PvE_Stigma_Text").text("Second Wind I");
        $("#PvE_Stigma_Description").text("Recovers HP by 35% and increases Maximum HP by 35% and Strike Fortitude by 500 for 1m.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 298");
    });
    //Gladiator Alternative PvE Stigmas

    $("#Piercing_Rupture_II_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_stigma_shockburst_g2.png");
        $("#PvE_Stigma_Text").text("Piercing Rupture II");
        $("#PvE_Stigma_Description").text("Deals 1543~1842 physical damage to up to 18 enemies within a 10m radius, and decreases their Physical Def by 600 for 30s.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 205");
    });
    $("#Crippling_Cut_VII_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_fi_cripplingcut_g7.png");
        $("#PvE_Stigma_Text").text("Crippling Cut VII");
        $("#PvE_Stigma_Description").text("Inflicts 1185~1484 physical damage on a fallen enemy");
        $("#PvE_Stigma_Cooldown").text("Cooldown 18s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 106");
    });
    $("#Tendon_Slice_III_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_kneecrash_g3.png");
        $("#PvE_Stigma_Text").text("Tendon Slice III");
        $("#PvE_Stigma_Description").text("Inficlts 996~1295 damage to the target and immobilizes it for 8s");
        $("#PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 212");
    });
    $("#Absorbing_Fury_IV_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_seismicdrain_g4.png");
        $("#PvE_Stigma_Text").text("Absorbing Fury IV");
        $("#PvE_Stigma_Description").text("Inflicts 654 ~ 953 physical damage on enemies with 7m of you and absorbs 50% of the damage as HP.");
        $("#PvE_Stigma_Cooldown").text("Cooldown 10s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 212");
    });
    $("#Exhausting_Wave_I_PvE").hover(function() {
        $("#PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_fi_whirldrain_g1.png");
        $("#PvE_Stigma_Text").text("Exhausting Wave I");
        $("#PvE_Stigma_Description").text("Inflicts 397 - 696 physical damage on enemies within 7m of the caster and absorbs 20% of the damage as HP. Multicast 3 Times");
        $("#PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 109");
    });



    //Templar PVP data
    $("#Inquisitors_Blow_III").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_thunderblade_g3.png");
        $("#Temp_PvP_Stigma_Text").text("Inquisitor's Blow III");
        $("#Temp_PvP_Stigma_Description").text("Inflicts 1067 ~ 1087 physical damage on a target within a 15m radius of you");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 106");
    });

    $("#Punishment_VI").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_divineslash_g6.png");
        $("#Temp_PvP_Stigma_Text").text("Punishment VI");
        $("#Temp_PvP_Stigma_Description").text("Inflicts 1222~1242 random physical damage on the target by wielding a Greatsword.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 132");
    });

    $("#Illusion_Chains_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_triplesnacher_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Illusion Chains I");
        $("#Temp_PvP_Stigma_Description").text("Pulls up to 3 enemies within a 17m radius before you, increases Enmity, and decreases their movement speed for 10s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 218");
    });

    $("#Stubborn_Spirit_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_movingstance_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Stubborn Spirit I");
        $("#Temp_PvP_Stigma_Description").text("Increases your Block by 1000, Physical Def by 15%, Stun, Knock Back, Stumble, Spin, and Aether's Hold Resists by 1000, Immobilization Resist by 1000, Reduce Speed Resist by 1000, and Magic Suppression by 700");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 6s");
        // $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 298");
    });

    $("#Holy_Shield_IV").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_holywrath_g4.png");
        $("#Temp_PvP_Stigma_Text").text("Holy Shield IV");
        $("#Temp_PvP_Stigma_Description").text("For 30s, you reflect 168 damage back to the enemy within 5m radius that attacks you.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 1m");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 100");
    });



    $("#Temp_Unwavering_Devotion_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_wa_steadiness_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Unwavering Devotion I");
        $("#Temp_PvP_Stigma_Description").text("Increases your Stun, Knock Back, Stumble, Spin, and Aether's Hold Resists by 800 for 1m30s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 79");
    });

    $("#Doom_Lure_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_stunningsnacher_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Doom Lure I");
        $("#Temp_PvP_Stigma_Description").text("Grabs an enemy within 17m of you, pulling it to you, increasing its Enmity towards you, and decreasing its movement speed for 10s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 76");
    });


    $("#Break_Power_V").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_breakpower_g5.png");
        $("#Temp_PvP_Stigma_Text").text("Break Power V");
        $("#Temp_PvP_Stigma_Description").text("Inflicts 3159~3179 physical damage to a stumbled target, and decreases its Physical Attack by 30 for 30s. While the skill is in effect, your physical attack increases by 30.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 16s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 80");
    });

    $("#Magic_Smash_VI").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_powersink_g6.png");
        $("#Temp_PvP_Stigma_Text").text("Magic Smash VI");
        $("#Temp_PvP_Stigma_Description").text("Inflicts 1452 earth damage to a target within a 25m radius.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 218");
    });

    $("#Divine_Fury_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_divinepower_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Divine Fury I");
        $("#Temp_PvP_Stigma_Description").text("Increases your Physical Attack by 30% for 30s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 86");
    });

    $("#Divine_Justice_VI").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_brainstorm_g6.png");
        $("#Temp_PvP_Stigma_Text").text("Divine Justice VI");
        $("#Temp_PvP_Stigma_Description").text("Inflicts 936 earth damage to a target within a 25m radius and stuns the target for 2s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 272");
    });

    $("#Empyrean_Fury_I").hover(function() {
        $("#Temp_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_destructwish_g1.png");
        $("#Temp_PvP_Stigma_Text").text("Empyrean Fury I");
        $("#Temp_PvP_Stigma_Description").text("Increases Physical Attack by 50%, Magical Acc by 200 and Magic Boost by 200 for 30s.");
        $("#Temp_PvP_Stigma_Cooldown").text("Cooldown 1m30s");
        $("#Temp_PvP_Stigma_Manacost").text("Usage Cost MP 165");
    });


    //templar PvE Data

    $("#Inquisitors_Blow_III_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_thunderblade_g3.png");
        $("#Temp_PvE_Stigma_Text").text("Inquisitor's Blow III");
        $("#Temp_PvE_Stigma_Description").text("Inflicts 1067 ~ 1087 physical damage on a target within a 15m radius of you");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 106");
    });

    $("#Punishment_VI_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_divineslash_g6.png");
        $("#Temp_PvE_Stigma_Text").text("Punishment VI");
        $("#Temp_PvE_Stigma_Description").text("Inflicts 1222~1242 random physical damage on the target by wielding a Greatsword.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 132");
    });

    $("#Illusion_Chains_I_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_triplesnacher_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Illusion Chains I");
        $("#Temp_PvE_Stigma_Description").text("Pulls up to 3 enemies within a 17m radius before you, increases Enmity, and decreases their movement speed for 10s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 218");
    });

    $("#Bodyguard_III").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_grandprotection_g3.png");
        $("#Temp_PvE_Stigma_Text").text("Bodyguard III");
        $("#Temp_PvE_Stigma_Description").text("For 30s, decreases damage by 100% and receive 50% of attack damage inflicted on a group member within a 25m radius whenever they receive attack.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 218");
    });

    $("#Holy_Shield_IV_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_holywrath_g4.png");
        $("#Temp_PvE_Stigma_Text").text("Holy Shield IV");
        $("#Temp_PvE_Stigma_Description").text("For 30s, you reflect 168 damage back to the enemy within 5m radius that attacks you.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 100");
    });



    $("#Temp_Unwavering_Devotion_I_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_wa_steadiness_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Unwavering Devotion I");
        $("#Temp_PvE_Stigma_Description").text("Increases your Stun, Knock Back, Stumble, Spin, and Aether's Hold Resists by 800 for 1m30s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 79");
    });

    $("#Doom_Lure_I_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_stunningsnacher_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Doom Lure I");
        $("#Temp_PvE_Stigma_Description").text("Grabs an enemy within 17m of you, pulling it to you, increasing its Enmity towards you, and decreasing its movement speed for 10s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#PvE_Stigma_Manacost").text("Usage Cost MP 76");
    });


    $("#Break_Power_V_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_breakpower_g5.png");
        $("#Temp_PvE_Stigma_Text").text("Break Power V");
        $("#Temp_PvE_Stigma_Description").text("Inflicts 3159~3179 physical damage to a stumbled target, and decreases its Physical Attack by 30 for 30s. While the skill is in effect, your physical attack increases by 30.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 16s");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 80");
    });

    $("#Magic_Smash_VI_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_powersink_g6.png");
        $("#Temp_PvE_Stigma_Text").text("Magic Smash VI");
        $("#Temp_PvE_Stigma_Description").text("Inflicts 1452 earth damage to a target within a 25m radius.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 30s");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 218");
    });

    $("#Divine_Fury_I_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_kn_divinepower_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Divine Fury I");
        $("#Temp_PvE_Stigma_Description").text("Increases your Physical Attack by 30% for 30s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 86");
    });

    $("#Divine_Justice_VI_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_brainstorm_g6.png");
        $("#Temp_PvE_Stigma_Text").text("Divine Justice VI");
        $("#Temp_PvE_Stigma_Description").text("Inflicts 936 earth damage to a target within a 25m radius and stuns the target for 2s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 272");
    });

    $("#Empyrean_Fury_I_PvE").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_destructwish_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Empyrean Fury I");
        $("#Temp_PvE_Stigma_Description").text("Increases Physical Attack by 50%, Magical Acc by 200 and Magic Boost by 200 for 30s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 1m30s");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 165");
    });

    //Templar Alt PvE Stigmas Data

    $("#Aether_Armor_I").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_stigma_resistarmor_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Aether Armor I");
        $("#Temp_PvE_Stigma_Description").text("Increases your Magic Resist by 800 for 30s.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 5m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 103");
    });
    $("#Empyrean_Providence_I").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_invinsibleprotect_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Empyrean Providence I");
        $("#Temp_PvE_Stigma_Description").text("Creates a protective shield for 15s that has a 100% chance of blocking damage each time the caster and up to 6 allies within a 30m radius receive attack. In addition, increases Stun, Knock Back, Stumble, Spin, and Aether's Hold Resists by 1000 (The protective shield blocks 50% of the damage received per attack).");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 10m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 404");
    });

    $("#Incite_Rage_I").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_highprovoke_g1.png");
        $("#Temp_PvE_Stigma_Text").text("Incite Rage I");
        $("#Temp_PvE_Stigma_Description").text("Taunts a target within 15m, increase its Enmity toward you for a short time.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 86");
    });


    $("#Prayer_of_Resilience_VI").hover(function() {
        $("#Temp_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_kn_recover_g6.png");
        $("#Temp_PvE_Stigma_Text").text("Prayer of Resilience VI");
        $("#Temp_PvE_Stigma_Description").text("Restores HP by 3979.");
        $("#Temp_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Temp_PvE_Stigma_Manacost").text("Usage Cost MP 272");
    });

    //Assassin PvE Data

    $("#Sigil_Strike_VIII").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_carvesignetchain_g8.png");
        $("#Sin_PvE_Stigma_Text").text("Sigil Strike VIII");
        $("#Sin_PvE_Stigma_Description").text("Inflicts 274~306 physical damage on the target and engraves a signet pattern on the target up to 3 level.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 6s");
        //$("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 272");
    });


    $("#Slayer_Form_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_light_defendroar_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Slayer Form I");
        $("#Sin_PvE_Stigma_Description").text("You transform into a Slayer for 1m. While you are transformed, your Magic Resist, Magical Acc, and Maximum HP increase by 250, 300, and 3000, respectively, and you recover MP quickly.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 109");
    });

    $("#Shadowfall_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_shadowdrop_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Shadowfall I");
        $("#Sin_PvE_Stigma_Description").text("Grabs a stunned target and inflicts 1147 - 1179 physical damage, causing them to stumble in the process.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 1m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 212");
    });


    $("#Ambush_VI").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_blindside_g6.png");
        $("#Sin_PvE_Stigma_Text").text("Ambush VI");
        $("#Sin_PvE_Stigma_Description").text("Jumps behind a target's back within 20m to inflict 398~430 physical damage. May also stun it.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 40s");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 101");
    });


    $("#Deadly_Abandon_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_stabstance_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Deadly Abandon I");
        $("#Sin_PvE_Stigma_Description").text("Increases your Physical Attack by 20% for 3m while decreasing your Evasion by 200.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 5m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 100");
    });

    $("#Oath_of_Accuracy_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_hitmanmind_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Oath of Accuracy I");
        $("#Sin_PvE_Stigma_Description").text("Increases your Accuracy by 500 and Magical Acc by 500 for 20s.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 73");
    });

    $("#Apply_Deadly_Poison_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_stuningintention_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Apply Deadly Poison I");
        $("#Sin_PvE_Stigma_Description").text("Uses 2 Scolopen Poison to apply poison to your weapon. For 5m, there is a 2% chance of stunning the target with each attack.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 10s");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 52");
    });
    $("#Apply_Lethal_Venom_VI").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_explosionpoison_g6.png");
        $("#Sin_PvE_Stigma_Text").text("Apply Lethal Venom VI");
        $("#Sin_PvE_Stigma_Description").text("Uses 10 Scolopen Poison to poison the weapon. For 30s, there is a 2% chance of inflicting additional 672 damage on the target with each attack.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 272");
    });

    $("#Blinding_Burst_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_blindingburst_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Blinding Burst I");
        $("#Sin_PvE_Stigma_Description").text("Blinds nearby enemies within a 15m radius of you for 15s-25s and reduces their Magical Acc by 150.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 79");
    });


    $("#Venomous_Strike_II").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_venomstab_g2.png");
        $("#Sin_PvE_Stigma_Text").text("Venomous Strike II");
        $("#Sin_PvE_Stigma_Description").text("Chance to inflict 332~364 damage and poison the target for 15s. If used on the target's back, inflicts an additional 816 damage.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 136");
    });

    $("#Flurry_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_quickmove_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Flurry I");
        $("#Sin_PvE_Stigma_Description").text("Your Atk Speed increases by 20% for 30s.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 2m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 115");
    });

    $("#Sensory_Boost_I").hover(function() {
        $("#Sin_PvE_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_senseboost_g1.png");
        $("#Sin_PvE_Stigma_Text").text("Sensory Boost I");
        $("#Sin_PvE_Stigma_Description").text("Increases Evasion by 800, Magic Resist by 500, and Strike Resist by 100 for 12s.");
        $("#Sin_PvE_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 144");
    });


    //assassin pvp stigma data

    $("#Sigil_Strike_VIII_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_carvesignetchain_g8.png");
        $("#Sin_PvP_Stigma_Text").text("Sigil Strike VIII");
        $("#Sin_PvP_Stigma_Description").text("Inflicts 274~306 physical damage on the target and engraves a signet pattern on the target up to 3 level.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 6s");
        //$("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP 272");
    });


    $("#Slayer_Form_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_light_defendroar_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Slayer Form I");
        $("#Sin_PvP_Stigma_Description").text("You transform into a Slayer for 1m. While you are transformed, your Magic Resist, Magical Acc, and Maximum HP increase by 250, 300, and 3000, respectively, and you recover MP quickly.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 109");
    });

    $("#Shadowfall_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_shadowdrop_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Shadowfall I");
        $("#Sin_PvP_Stigma_Description").text("Grabs a stunned target and inflicts 1147 - 1179 physical damage, causing them to stumble in the process.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 1m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 212");
    });


    $("#Ambush_VI_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_blindside_g6.png");
        $("#Sin_PvP_Stigma_Text").text("Ambush VI");
        $("#Sin_PvP_Stigma_Description").text("Jumps behind a target's back within 20m to inflict 398~430 physical damage. May also stun it.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 40s");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 101");
    });


    $("#Flash_of_Speed_I").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_shadowdodge_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Flash of Speed I");
        $("#Sin_PvP_Stigma_Description").text("You move 15m forward instantly, and all immobilization and movement speed reduction debuffs are removed.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 203");
    });

    $("#Oath_of_Accuracy_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_hitmanmind_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Oath of Accuracy I");
        $("#Sin_PvP_Stigma_Description").text("Increases your Accuracy by 500 and Magical Acc by 500 for 20s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 73");
    });

    $("#Apply_Deadly_Poison_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_stuningintention_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Apply Deadly Poison I");
        $("#Sin_PvP_Stigma_Description").text("Uses 2 Scolopen Poison to apply poison to your weapon. For 5m, there is a 2% chance of stunning the target with each attack.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 10s");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 52");
    });
    $("#Aethertwisting_I").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_whisperofgale_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Aethertwisting I");
        $("#Sin_PvP_Stigma_Description").text("You can resist 2 magical attacks. Lasts 8s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 1m");
        //$("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 272");
    });

    $("#Blinding_Burst_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_blindingburst_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Blinding Burst I");
        $("#Sin_PvP_Stigma_Description").text("Blinds nearby enemies within a 15m radius of you for 15s-25s and reduces their Magical Acc by 150.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 79");
    });


    $("#Venomous_Strike_II_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_venomstab_g2.png");
        $("#Sin_PvP_Stigma_Text").text("Venomous Strike II");
        $("#Sin_PvP_Stigma_Description").text("Chance to inflict 332~364 damage and poison the target for 15s. If used on the target's back, inflicts an additional 816 damage.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 136");
    });

    $("#Flurry_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_quickmove_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Flurry I");
        $("#Sin_PvP_Stigma_Description").text("Your Atk Speed increases by 20% for 30s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 2m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 115");
    });

    $("#Sensory_Boost_I_PvP").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_senseboost_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Sensory Boost I");
        $("#Sin_PvP_Stigma_Description").text("Increases Evasion by 800, Magic Resist by 500, and Strike Resist by 100 for 12s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 144");
    });

    $("#Apply_Lethal_Venom_VI_ALT").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_explosionpoison_g6.png");
        $("#Sin_PvP_Stigma_Text").text("Apply Lethal Venom VI");
        $("#Sin_PvP_Stigma_Description").text("Uses 10 Scolopen Poison to poison the weapon. For 30s, there is a 2% chance of inflicting additional 672 damage on the target with each attack.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 3m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 272");
    });

    $("#Lightning_Slash_VI").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/live_as_flashslash_g6.png");
        $("#Sin_PvP_Stigma_Text").text("Lightning Slash VI");
        $("#Sin_PvP_Stigma_Description").text("Inflicts 661~693 damage to the target. The target's Magical Acc decreases by 200 for 30s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 109");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 24s");
    });


    $("#Shadow_Walk_I").hover(function() {
        $("#Sin_PvP_Stigma_Img").attr("src", "https://aioncodex.com/skills/cbt_as_shadowwalk_g1.png");
        $("#Sin_PvP_Stigma_Text").text("Shadow Walk I");
        $("#Sin_PvP_Stigma_Description").text("Increases your Atk Speed by 40% and Speed by 20% for 20s.");
        $("#Sin_PvP_Stigma_Cooldown").text("Cooldown 1m");
        $("#Sin_PvP_Stigma_Manacost").text("Usage Cost MP 59");
    });
});




// $("#").hover(function() {
//     $("#Sin_PvE_Stigma_Img").attr("src", "");
//     $("#Sin_PvE_Stigma_Text").text("");
//     $("#Sin_PvE_Stigma_Description").text("");
//     $("#Sin_PvE_Stigma_Cooldown").text("Cooldown ");
//     $("#Sin_PvE_Stigma_Manacost").text("Usage Cost MP ");
// });