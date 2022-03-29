import React from "react";
import andrius from './bossImages/Andrius.webp';
import childe from './bossImages/Childe_Foul_Legacy_Transformation.webp';
import anemoH from './bossImages/Enemy_Anemo_Hypostasis.webp';
import azhdaha from './bossImages/Enemy_Azhdaha.webp';
import cryoH from './bossImages/Enemy_Cryo_Hypostasis.webp';
import cryoR from './bossImages/Enemy_Cryo_Regisvine.webp';
import dvalin from './bossImages/Enemy_Dvalin.webp';
import electroH from './bossImages/Enemy_Electro_Hypostasis.webp';
import geoH from './bossImages/Enemy_Geo_Hypostasis.webp';
import wolflord from './bossImages/Enemy_Golden_Wolflord.webp';
import hydroH from './bossImages/Enemy_Hydro_Hypostasis.webp';
import maguu from './bossImages/Enemy_Maguu_Kenki.webp';
import oceanid from './bossImages/Enemy_Oceanid.webp';
import mechArray from './bossImages/Enemy_Perpetual_Mechanical_Array.webp';
import geovishap from './bossImages/Enemy_Primo_Geovishap.webp';
import bathysmal from './bossImages/Enemy_Primordial_Bathysmal_Vishap.webp';
import pyroH from './bossImages/Enemy_Pyro_Hypostasis.webp';
import pyroR from './bossImages/Enemy_Pyro_Regisvine.webp';
import signora from './bossImages/Enemy_Signora.png';
import thunderManifest from './bossImages/Enemy_Thunder_Manifestation.webp';



export function Boss(props){

    const { name, materials } = props;

    const normalDrops = {
        "hurricaneseed": anemoH, 
        "lightningprism": electroH, 
        "hoarfrostcore": cryoR, 
        "crystallinebloom": cryoH, 
        "cleansingheart": oceanid, 
        "everflameseed": pyroR, 
        "basaltpillar": geoH, 
        "juvenilejade": geovishap, 
        "marionettecore": maguu, 
        "smolderingpearl": pyroH, 
        "perpetualheart": mechArray, 
        "dewofrepudiation": hydroH, 
        "stormbeads": thunderManifest, 
        "riftbornregalia": wolflord, 
        "dragonheirsfalsefin": bathysmal
    };
    
    const bossDrops = {
        "tailofboreas": andrius, 
        "ringofboreas": andrius, 
        "spiritlocketofboreas": andrius,
        "dvalinsplume": dvalin, 
        "dvalinsclaw": dvalin, 
        "dvalinssigh": dvalin,
        "tuskofmonoceroscaeli": childe, 
        "shardofafoullegacy": childe, 
        "shadowofthewarrior": childe, 
        "dragonlordscrown": azhdaha, 
        "bloodjadebranch": azhdaha, 
        "gildedscale": azhdaha, 
        "moltenmoment": signora, 
        "hellfirebutterfly": signora, 
        "ashenheart": signora, 
    };

    const getSource = () => {

        let boss = "";
        let materialKeys = Object.keys(materials);
        let normalBossKeys = Object.keys(normalDrops);
        let weeklyBossKeys = Object.keys(bossDrops);

        materialKeys.forEach(material => {
            let matName = material.toLowerCase().replace(/\s/g, '').replace(/'/g, '');
            if(normalBossKeys.includes(matName)){
                boss = matName;
            }
            else if(weeklyBossKeys.includes(matName)){
                boss = matName;
            }
        });

        return normalDrops[boss] || bossDrops[boss];
    }

    return (
        <img src={getSource()} alt={name} id={name} width="800" height="600"/>
    )
}