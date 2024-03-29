let models = {
    'ADLI': ['100', '125', '150', '300', '320', '400', '450', '50', '700'],
    'Aeon': ['Aero', 'Cobra', 'Crossland', 'Echo', 'Elite', 'Minikolt', 'Overland', 'Pulsar', 'Quadro', 'Revo', 'Urban', 'Xboy'],
    'American Ironhorse': ['Bandera', 'Classic Chop', 'Ironhorse Ranger', 'Judge', 'LSC', 'Outlaw', 'Slammer', 'Tejas', 'Texas Chopper'],
    'Aprilia': ['125', '200', '250', '50', 'AF1', 'Atlantic', 'Blue Marlin', 'Caponord', 'Classic', 'Climber', 'Dorsoduro', 'ETV', 'ETX', 'F1', 'Falco', 'Leonardo', 'MXV', 'Mana', 'Pegaso', 'RS4', 'RSV4', 'RXV', 'Rs', 'Rx', 'SRV', 'SXV', 'Scarabeo', 'Shiver', 'Sr', 'Sx', 'Tuareg', 'Tuono'],
    'Arctic Cat': ['Dvx', 'Mud Pro', 'Super Duty Diesel', 'TBX', 'TRV', 'Thundercat', 'XC', 'Youth'],
    'Argo': ['6 x 6 750 HDI', '6 x 6 FRONTIER 650', '6 х 6 FRONTIER EFI', '6X6 Frontier 580', '6x6 650 HD', '8 x 8 750 HDI EU', '8X8 Frontier 650', '8x8 700 HD', '8x8 700 HD EU', '8x8 750 EFI', '8x8 750 HDi', '8x8 750 HDi SE', '8x8 XTD', '8x8 XTI', 'Centaur', 'Frontier'],
    'Atala': ['50', 'Uno'],
    'Aurora V8': ['Helifire'],
    'Awo': ['250', '425'],
    'BMW': ['C', 'F', 'G', 'HP', 'K', 'R', 'S'],
    'BRP': ['Can-Am', 'Lynx', 'Sea-Doo', 'Ski-Doo'],
    'Babetta': ['206', '207', '210'],
    'Balkan': ['250', '50', '75'],
    'Baotian': ['Bt', 'Citibike', 'Eagle', 'Evolution', 'Falcon', 'Monza', 'Tanco'],
    'Bashan': ['BS', 'CK'],
    'Bemi': ['Alien', 'Apachi', 'Apollo', 'BMW', 'Buggy', 'CityQuad', 'Dirt', 'EGL', 'Eco-Cobra', 'Electro', 'Grizzly', 'Hummer', 'Huricane', 'Panzer', 'Poket', 'Raprot', 'Rebel', 'Renegade', 'Roady', 'Robin', 'Sky', 'Speedy'],
    'Benelli': ['125', '250', '254', '304', '350', '354', '49X', '500', '654', '666', '750', '900', 'Cafe Racer', 'Caffenero', 'Century', 'Macis', 'Motard', 'Pepe', 'Quattronove', 'Sei', 'Tornado', 'Velvet', 'Zenzero'],
    'Benzhou': ['YY100T', 'YY110', 'YY125-4', 'YY125T', 'YY150', 'YY150T', 'YY250T', 'YY50QT', 'YY7', 'YY8'],
    'Beta': ['Alp', 'Ark', 'EVO', 'M4', 'Minicross', 'Minitrial', 'RE', 'Rr', 'Urban'],
    'Bombardier': ['DS', 'Outlander', 'Quest', 'Rally', 'Renegate', 'Traxter'],
    'Buell': ['1125', 'Blast', 'Firebolt', 'Lightning', 'M2', 'S1', 'S2', 'S3', 'Ulysses', 'X1', 'XB'],
    'Buyang': ['Bc', 'FA', 'FS'],
    'Cagiva': ['125', '650', '750', '900', 'Canyon', 'E', 'Elefant', 'Gran Canyon', 'Mito', 'N1', 'Navigator', 'Planet', 'Raptor'],
    'Can-Am': ['Outlander'],
    'Cfmoto': ['CF625', 'CFORCE', 'Cf 500', 'E charm', 'E jewel', 'Fashion', 'Freedom', 'Glory', 'Jet Max', 'Rancher', 'Terracross', 'Terralander', 'UFORCE', 'Utv', 'V-Night', 'V3', 'V5', 'X-Lander', 'ZFORCE'],
    'Cpi': ['Aragon', 'Astor', 'Bravo', 'Formula', 'GTR', 'Hussar', 'Oliver', 'Popcorn', 'SM', 'SX', 'XS'],
    'Cz': ['125', '150', '175', '180', '250', '350', '380', '500', '513'],
    'Daelim': ['B-Bone', 'Besbi', 'Citi', 'Daystar', 'Mitler', 'Roadwin', 'S1', 'S2', 'S3'],
    'Daytona': ['DY', 'Evo', 'Hercules', 'Leopard', 'Miro', 'Mistral', 'Monster', 'Nova', 'Panther', 'Remix', 'Smile', 'Sprinter', 'Yes'],
    'Derbi': ['50', 'Gp-1', 'Gpr', 'Mulhacen', 'Rambla', 'Senda', 'Terra', 'Vamos'],
    'Dinli': ['Centhor'],
    'Dkw': ['ARE', 'Golem', 'Hummel', 'KM', 'Nz', 'ORE', 'Rt', 'SB', 'SS', 'Sport', 'ZS'],
    'Ducati': ['1000', '1198', '1199', '125', '250', '350', '450', '500', '600', '620', '650', '748', '749', '750', '800', '848', '851', '860', '888', '900', '906', '907', '916', '996', '998', '999', 'Desmosedici', 'Diavel', 'Ducati 1299 Panigale', 'Ducati Scrambler', 'GT 1000', 'HM', 'Hypermotard ', 'M 900', 'Monster', 'Moto Guzzi Audace', 'Moto Guzzi Eldorado', 'Multistrada', 'PANIGALE 959', 'S4', 'SS', 'ST', 'Sport', 'SportClassic', 'Streetfighter', 'Superbike', 'Supersport', 'XDIAVEL'],
    'Egl': ['250', 'Lyda', 'Mad Max'],
    'Emeishan': ['EMS'],
    'Etz': ['150', '250', '251', '550', '80'],
    'Falcon': ['City Bug', 'Discovery', 'E-Charm', 'E-Jewel', 'Explorer', 'Junior', 'Nomad', 'Transformer', 'V3', 'V5', 'Vogue'],
    'Fantic': ['125', '250', '50', 'Caballero', 'Coach', 'Cruiser', 'Custom', 'Supersix', 'TX', 'Trial'],
    'Fym': ['Fy 150', 'Fy 250', 'Fy 50'],
    'Garelli': ['Flexi', 'GSP', 'Mosquito', 'Tiesse', 'XO', 'XR'],
    'Gas gas': ['125', '200', '280', '300', '450', 'Ec', 'Enducross', 'Fsr', 'HP', 'Halley', 'MC', 'Mx', 'Pampera', 'Sm', 'Txt', 'Wild'],
    'Genata': ['Big One', 'Cruiser', 'Daytona', 'Discovery', 'GT', 'Magnum', 'Milano', 'New Edition', 'Patrol', 'RC', 'Simple', 'Space', 'Supermoto', 'Wind Dream'],
    'Generic': ['Code', 'Cracker', 'Epico', 'Ideo', 'Inox', 'Jump', 'Mini Trigger', 'Onyx', 'ROC', 'Race', 'Sirion', 'Soho', 'Stream', 'TR', 'Toxic', 'Trigger', 'Urano', 'Vendetta', 'Vertigo', 'Worx', 'XOR', 'Zion'],
    'Geo ming': ['125', '50'],
    'Gilera': ['124', '125', '150', '350', '50', '500', '600', 'Apache', 'Coguar', 'DNA', 'Fuoco', 'GP', 'GSM', 'H&K', 'NGR', 'Nexus', 'Nordwes', 'Rc', 'Rcr', 'Runner', 'Rv', 'Rx', 'SC', 'SMT', 'Saturno', 'Sp', 'Stalker', 'Storm', 'SuperSport', 'TT Surfer', 'Typhoon', 'VC', 'XR1', 'Zulu'],
    'Go-ped': ['Esr', 'Gsr', 'Gtr', 'I-ped'],
    'HISUN': ['Axis', 'Forge', 'Golf cart', 'HS', 'Sector', 'Strike', 'Tactic'],
    'Harley-Davidson': ['Bad Boy', 'CVO', 'Custom', 'Dyna', 'Electra Glide Classic', 'Softail', 'Sportster', 'Street', 'Touring', 'Trike', 'V-Rod', 'VRCS'],
    'Herkules': ['280', '300', '320', '50', '500', 'Blizzard', 'Electra', 'Gladiator', 'Kingcobra', 'Megelli', 'Mirage', 'PR', 'Quadrift', 'Vanguard'],
    'Honda': ['125', '150', '250', '599', '750', '919', 'ANF', 'AX-1', 'Activa', 'Ape', 'Aviator', 'Benly', 'Big Red', 'Big Ruckus', 'C70', 'C90', 'Ca', 'Camino', 'Cb', 'Cbf', 'Cbr', 'Cbx', 'Cd', 'Cg', 'Ch', 'Cj', 'Cl', 'Clr', 'Cm', 'Cmx', 'Cn', 'Cr', 'Crea', 'Crf', 'Crm', 'Crossrunner', 'Ct', 'Cx', 'DN', 'Deauville', 'Dio', 'Dream', 'Dylan', 'Elite', 'Eve', 'Express', 'F6', 'FES', 'FJR', 'FSC', 'FT', 'FTR', 'Faze', 'Fmx', 'Foresight', 'Forza', 'FourTrax', 'Fury', 'Gb', 'Gl', 'Gold Wing', 'Gorilla', 'Gyro', 'H', 'Helix', 'Hornet', 'Integra', 'Interceptor', 'Jazz', 'Lead', 'MSX125', 'MT', 'MTX', 'Magna', 'Metropolitan', 'Millenium', 'Monkey', 'NHX', 'Nc', 'Nighthawk', 'Nr', 'Ns', 'Nsr', 'Nt', 'Ntv', 'Nx', 'Paneuropean', 'Pantheon', 'Pc', 'Pcx', 'Ps', 'Px', 'RVF', 'Rc', 'Rebel', 'Reflex', 'Ruckus', 'Rune', 'S', 'S-Wing', 'SCV', 'SFX', 'SL', 'SLR', 'ST', 'SW', 'Sabre', 'Sh', 'Shadow', 'Silver Wing', 'Sky', 'Smart Dio', 'Stateline', 'Steed', 'Super Cub', 'TL', 'Tiger', 'Today', 'Trx', 'V-Twin', 'V30', 'V65', 'Valkyrie', 'Varadero', 'Vf', 'Vfr', 'Vigor', 'Vision', 'Vt', 'Vtr', 'Vtx', 'Wave', 'X-ADV', 'X-Eleven', 'X4', 'X8R-S', 'Xbr', 'Xl', 'Xlr', 'Xlv', 'Xr', 'Xrv', 'Z50R', 'Zoomer'],
    'Husaberg': ['FC', 'FE', 'FR', 'FS', 'FX', 'TE'],
    'Husqvarna': ['125', '240', '250', '260', '350', '400', '430', '510', '610', 'CR', 'FE', 'Husky Boy', 'Husky Nox', 'LT', 'Nuda', 'SM', 'SMS', 'Smr', 'TC', 'TE', 'TXC', 'WR', 'WRE'],
    'Hyosung': ['Aquila', 'Classic', 'Comet', 'Cruise', 'Ez', 'Fc', 'Ga', 'Gf', 'Gt', 'Gv', 'Karion', 'Kr', 'Ms', 'Rally', 'Rapier', 'Rt', 'Rush', 'Rx', 'Sb', 'Sd', 'Sense', 'Sf', 'St', 'Super Cab', 'Supercap', 'T', 'Te', 'Tn', 'X', 'Xrx'],
    'Indian': ['Chief', 'Chieftain', 'Roadmaster', 'Scout', 'Springfield'],
    'Italjet': ['50.it', 'Dragster', 'Fast Boy', 'Formula', 'Grifon', 'Jack', 'JetSet', 'Jupiter', 'Marco Polo', 'Millennium', 'Pit Jet', 'Roller Craft', 'Torpedo', 'Velocifero'],
    'Jawa': ['125', '250', '330', '350', '353', '50', '500', '593', '640', '650', '693', '812', '90', 'Chopper', 'Mustang', 'Т'],
    'Jianshe': ['Js110-G', 'Js125-6B', 'Js250', 'Js400', 'Mountain Lion', 'Wild Cat'],
    'Jinlun': ['JL 125', 'JL 150', 'JL 250', 'JL 50'],
    'Jocsport': ['300', '600'],
    'Jonway': ['Explorer', 'GTS', 'Grizzy', 'MLN', 'MLY - A', 'MSG - B', 'MSG - D', 'MSG - E', 'Predator', 'Vajra', 'Victoria', 'YY'],
    'Kaisar': ['ATV', 'KS', 'Nikmot', 'Pearl', 'Ruby', 'Vilmot'],
    'Kawasaki': ['100', '1000', '125', '1400', '250', '350', '400', '500', '620', '650', '750', '900', 'A', 'Bayou', 'Brute Force', 'CSR', 'Concours', 'Coyote', 'D-Tracker', 'EL', 'EN', 'ER', 'EX', 'Eliminator', 'Estrella', 'F-11', 'FX', 'G3', 'G5', 'Gpx', 'Gpz', 'Gs', 'Gt', 'Gto', 'Gtr', 'H', 'J125', 'J300', 'Kd', 'Kdx', 'Ke', 'Kfx', 'Kh', 'Kl', 'Kle', 'Klf', 'Klr', 'Kls', 'Klv', 'Klx', 'Km', 'Kmx', 'Kr', 'Kvf', 'Kx', 'Kz', 'Mule', 'Ninja', 'Prairie', 'Stockman', 'Super Sherpa', 'Tengai', 'Versys', 'Vn', 'Voyager', 'Vulcan', 'W', 'Z', 'Zephyr', 'Zl', 'Zn', 'Zr', 'Zrx', 'Zx', 'Zxr', 'Zzr'],
    'Keeway': ['ARN', 'ATV', 'Agora', 'CUB Partner', 'Cooper', 'Cruiser', 'Electric', 'F-act', 'Flash', 'Focus', 'Gallop', 'Goccia', 'Hacker', 'Hurricane', 'Kee', 'Land Cruiser', 'Matrix', 'Milan', 'Outlook', 'Partner', 'Pixel', 'Pixie', 'RKS', 'RKV', 'RX3', 'RY', 'Ranger', 'Scud', 'Silverblade', 'Speed', 'Superlight', 'Supershadow', 'Swan', 'TX', 'Venus', 'Wizard', 'X-Ray'],
    'Kinetic': ['4S', 'Blaze', 'Luna'],
    'Kioti': ['Mechron 2210'],
    'Ktm': ['105', '1190', '125', '144', '150', '200', '250', '300', '350', '380', '40', '400', '450', '50', '500', '505', '520', '525', '530', '560', '600', '620', '625', '640', '65', '660', '690', '80', '85', '950', '990', 'Adventure', 'Comet', 'Duke', 'Duke III', 'EXC', 'EXC-E', 'EXE', 'Enduro', 'Enduro LC-4', 'Freeride', 'GS', 'Incas', 'LC', 'Prestige', 'RC8', 'SMC', 'SMR', 'SX', 'SX-F', 'SXR', 'Sting', 'Super Duke', 'Supermoto', 'Supermoto LC-4', 'XC'],
    'Kymco': ['125', '250', 'Activ', 'Active', 'Agility', 'Bet and Win', 'Caro', 'City', 'Cruiser', 'DJ', 'Dink', 'Downtown', 'Filly', 'G-Dink', 'Grand Dink', 'Grand King', 'Grandvista', 'Heroism', 'Hipster', 'Jetix', 'K-Pipe', 'K-XCT', 'KR', 'Like', 'MXU', 'Many', 'Maxxer', 'Mongoose', 'Movie', 'Myroad', 'New DINK', 'Nexxon', 'People', 'Pulsar', 'Quannon', 'RS', 'Sento', 'Sooner', 'Spike', 'Sting', 'Straight', 'Stryker', 'Sunboy', 'Super', 'Top Boy', 'Venox', 'Vitality', 'Xciting', 'Yagaer', 'Yager', 'Yup'],
    'Laverda': ['1000', '1200', '500', '600', '650', '668', '750', 'Formula 650', 'Ghost', 'OR', 'SFC', 'Sport', 'TTS'],
    'Lifan': ['250-4', 'Chimp', 'Cub', 'Delta', 'Elite', 'Goldfish', 'Huntaway', 'LF', 'Matrix', 'Metro', 'Smart'],
    'Linhai': ['150', '300', '400', '50', '500', '700', '80', 'М150', 'М550', 'М550L'],
    'MV Agusta': ['1000', '1100', '125', '150', '350', '500', '750', '800', '900', '910', 'Brutale', 'F3', 'F4'],
    'Malaguti': ['125', 'A2 Phantom', 'Blog', 'Centro', 'Ciak', 'DVD', 'Drakon', 'F', 'Fifty', 'Firefox', 'Grizzly', 'Madison', 'Password', 'Phantom', 'RST', 'Spidermax', 'X3M', 'XSM', 'XTM', 'Yesterday'],
    'Mbk': ['125', '350', 'Booster', 'Cityliner', 'EC03', 'Flame', 'Flipper', 'MachG', 'Nitro', 'Oceo', 'Ovetto', 'Skycruiser', 'Skyliner', 'Sport', 'Stunt', 'Waap', 'X-Limit', 'X-Over', 'X-Power'],
    'Mikilon': ['Crack', 'Defender', 'Dual Sports', 'Hammer', 'Kids', 'Motorcross', 'Pentora', 'Pit Bike'],
    'Moto Guzzi': ['1000', '1100', '1200', '250', '254', '500', '650', '750', '850', '940', 'Audace', 'Bellagio', 'Breva', 'California', 'Centauro', 'Daytona', 'Eldorado', 'Falcone', 'Griso', 'Ippogrifo', 'Jackal', 'LeMans', 'MGS-01', 'MGX-21', 'Mille GT', 'NTX', 'Nevada', 'Norge', 'Quota ', 'SP', 'Sport', 'Stelvio', 'TS', 'Targa', 'V'],
    'Moto Morini': ['1200', '125', '250', '3 1/2', '350', '400', '500', '501', '9 1/2', 'AMEX', 'Corsaro', 'Dart', 'Granpasso', 'Scrambler'],
    'MotorHispania': ['Duna', 'KN', 'MH', 'RX', 'RYZ'],
    'Mz': ['125', '150', '151', '15o', '175', '250', '251', '25o', '350', '50', '660', 'Cross', 'Etz', 'Str', 'Trofi'],
    'Nsu': ['250'],
    'Pannonia': ['250', 'P 10', 'P 12', 'P 20', 'P 21', 'T 5'],
    'Peugeot': ['BlackSat', 'Blaster', 'C-Tech', 'Citystar', 'Django', 'Elystar', 'Geopolis', 'Jet', 'Kissbee', 'LXR', 'Looxor Advantage', 'Ludix', 'Metropolis', 'Rally Victories', 'Satelis', 'Snake', 'Speedfight', 'Sum Up', 'TKR', 'Tweet', 'V-Clic', 'Vivacity', 'Vogue', 'XP', 'XPS', 'XR'],
    'Piaggio': ['B', 'BV', 'Beverly', 'Bravo', 'Carnaby', 'Chimati', 'Ciao', 'Fly', 'Free', 'Hexagon', 'Liberty', 'Medley', 'Mp3', 'Nrg', 'PX', 'Scarabeo', 'Sfera', 'Skipper', 'Sphere', 'Typhoon', 'X10', 'X7', 'X8', 'X9', 'XEvo', 'Zip'],
    'Pioneer Nevada': ['125', '250'],
    'Pocketbike': ['Big', 'Small'],
    'Polaris': ['Ace', 'General', 'Outlaw', 'Phoenix', 'RZR', 'Ranger', 'Scrambler', 'Slingshot', 'Snowmobile', 'Sportsman', 'Trail Blazer', 'Trail Boss'],
    'Puch': ['125', '175', '250', '350', '600', 'GS', 'Imola', 'M', 'MC', 'Maxi', 'Puh', 'VZ'],
    'Qingqi': ['Buffrlo', 'Fire Storm', 'Fizz', 'Grampus', 'Jet', 'Koala', 'Leopard', 'Liger', 'QM', 'Ranger', 'Shuttle', 'Sport', 'Sum-Up', 'Tracker', 'V-Clic', 'Variant', 'Wealthy'],
    'Rewaco': ['RF1 GT', 'RF1 LT', 'RF1 ST'],
    'Rieju': ['125', '50', 'MRX', 'MX', 'Marathon', 'Mius', 'Mrt', 'NKD', 'Pacific', 'RR', 'RRX', 'Rs', 'SMX', 'Spike', 'Tango', 'Toreo', 'e-Bicy'],
    'Romet': ['707', '717', '727', '747', '767', 'CRC', 'Delivery', 'Division', 'EV1', 'K', 'Maxi', 'R', 'RR', 'RXL', 'Retro', 'Soft Chopper', 'Z', 'Zetka'],
    'Royal Enfield': ['Bulet 350', 'Bullet 500', 'Classic 350', 'Classic 500', 'Continental 650', 'Continental GT 535', 'Himalayan 411', 'Interceptor 650'],
    'Sachs': ['49er', 'B-805', 'Bee', 'Dirty Devil', 'Eagle', 'FYM', 'LF', 'MadAss', 'Oliver Electro', 'Prima', 'Quattrocento', 'Roadster', 'SR', 'SX1', 'Saxonette Luxus', 'Saxylight', 'SpeedForce', 'SpeedJet', 'Typhoon', 'VS', 'X Road', 'XTC', 'ZX'],
    'Sampo': ['Falcon', 'Max', 'Phantom'],
    'Sanyang': ['Attila'],
    'Scoot': ['Balkan', 'Bull', 'Civico', 'Classic', 'Colt', 'Eyes', 'Rambo', 'Smart', 'Sniper', 'Space', 'Wasp'],
    'Shineray': ['XY', 'Xy'],
    'Simson': ['50', '51', 'Enduro', 'Mz', 'S', 'Sr', 'Start'],
    'Ski-Doo': ['Summit'],
    'Sundiro': ['125', '50', '90', 'Xdz'],
    'Sunra': ['Hawk', 'Hawk Li-ion'],
    'Sunsto': ['Advance', 'Angel', 'Ceres', 'Demon', 'EMS', 'Eroma', 'LF', 'M', 'MA', 'Vonroad'],
    'Suzuki': ['250', 'AP', 'Access', 'Address', 'An', 'B-King', 'Bandit', 'Birdie', 'Boost King', 'Boulevard', 'Burgman', 'Crosscage', 'DL', 'DR-Z', 'DS', 'Djebel', 'Dr', 'FX', 'GN', 'GNX', 'GP', 'GR', 'GV', 'GZ', 'Gemma', 'Gladius', 'Grasstracker', 'Gs', 'Gsf', 'Gsr', 'Gsx', 'Gsxr', 'Gt', 'Hayabusa', 'Hokuto', 'Impulse', 'Inazuma', 'Intruder', 'JR', 'Katana', 'KingQuad', 'LC', 'LS', 'Lets', 'Lets4', 'Marauder', 'Ozark', 'PV', 'QuadRacer', 'QuadSport', 'RE', 'RMX', 'Rf', 'Rg', 'Rgv', 'Rm', 'Rmz', 'Rs', 'Rv', 'SB', 'SFV', 'SP', 'SR', 'ST', 'SV', 'Savage', 'Sepia', 'Shogun', 'Sixteen', 'Skywave', 'Stratosphere', 'Street Magic', 'T', 'TC', 'TL', 'TR', 'TU', 'Tl', 'Tornado', 'Ts', 'US', 'V-strom', 'VL', 'VS', 'VX', 'VZ', 'VZR', 'Van Van', 'Volty', 'Volusia', 'XF', 'e-Lets'],
    'Swm': ['Ace of Spades', 'Boggi Milano', 'Gran Milano', 'Gran Turismo', 'Inter', 'RS 125 R', 'RS 300 R', 'RS 500 R', 'RS 650 R', 'SM 125 R', 'SM 500 R', 'Silver Vase', 'Six Days', 'Superdual'],
    'Sym': ['ALLO', 'Citycom', 'Combiz', 'Crox', 'Fiddle', 'GTS Joymax', 'HD2', 'Jet', 'Jet Basix', 'Jet Euro X', 'Jet Sport X', 'Joyride', 'Maxsym', 'Mio', 'Orbit', 'Quadlander', 'Symphony', 'Tonik', 'TrackRunner', 'VS', 'Wolf', 'Xpro'],
    'Tango': ['Jr80', 'Lr', 'Mini', 'Rover', 'Treker'],
    'Tatran': ['125'],
    'Tgb': ['Avenger', 'Blade', 'Target'],
    'Tm': ['Racing'],
    'Tomos': ['125', '15', 'APN 6', 'ATX', 'Alpino', 'Arrow', 'BT', 'Flexer', 'Hip-Hop', 'LX', 'MC', 'Pack’R', 'Quadro', 'Racing', 'Revival', 'SE', 'SM', 'ST', 'Sportmate', 'Sprint', 'Street Soul', 'Streetmate', 'Whizzr’d', 'Youngst’r'],
    'Triumph': ['Adventurer', 'America', 'Bandit', 'Bonneville', 'Centennial Edition Daytona', 'Daytona', 'Legend', 'New Tiger', 'Rocket', 'Scrambler', 'Speed Four', 'Speed Triple', 'Speedmaster', 'Sprint', 'Street Triple', 'Street Twin', 'Super', 'T', 'TR', 'TSS', 'TSX', 'TT', 'Thruxton', 'Thunderbird', 'Tiger', 'Trident', 'Trophy'],
    'Truva': ['Tr 100', 'Tr 125', 'Tr 150'],
    'Tzun': ['50'],
    'UGBEST': ['E-boy', 'Express', 'Irock', 'Koala', 'LD', 'Pony', 'Retro', 'Romex', 'Tres', 'UF', 'UR8', 'UX', 'UX4', 'VAX'],
    'VROMOS': ['ECO Cruiser', 'ECO Speed'],
    'Vanetti': ['50', 'L'],
    'Vento': ['Rebellian'],
    'Vespa': ['125', '150', '300', '50', 'GTS', 'GTV', 'Primavera', 'Sprint'],
    'Victory': ['Boardwalk', 'Cross Country', 'Cross Country Tour', 'Cross Roads', 'Hammer', 'High-Ball', 'Jackpot', 'Judge', 'Octane', 'Vegas', 'Vision Tour'],
    'Wangye': ['Wy125t-102', 'Wy125t-53', 'Wy125t-56', 'Wy125t-74', 'Wy150-5', 'Wy150t-3', 'Wy150t-57', 'Wy50qt-16', 'Wy50qt-4', 'Wy50qt-40', 'Wy50qt-58'],
    'Wonsim': ['Wj'],
    'Wt': ['Cross wt 07', 'Giove beta ', 'Giove eta', 'Giove sigma', 'Kalypso wt 150', 'Kaos wt', 'Kobra wt', 'Marte alfa', 'Marte beta', 'Marte delta', 'Marte gamma', 'Mokos wt 525', 'Motard wt 07', 'Pit wt 07', 'Poseydon wt 400', 'Race wt 07', 'Ram wt', 'Saturno gamma', 'Thor wt', 'Xx', 'Zev'],
    'Wuxi ': ['Comet', 'Harvey', 'Scoozy', 'Spidy', 'Vengo', 'Wcg', 'Winton', 'Zoomba'],
    'XGJao': ['Blade 125R', 'GJ 150'],
    'Xingyu': ['Xy250L'],
    'Xingyue': ['125', '50'],
    'Xinshun': ['XS-D055', 'XS-D058'],
    'Yamaha': ['2ja', '3kj', '4e', 'AG', 'AS 3', 'Active', 'Aerox', 'Alba', 'Axis', 'BT', 'Banshee', 'Big Bear', 'Black Max', 'Black X-Max', 'Bolt', 'Booster', 'Brrees', 'Bruin', 'Bw', 'C3', 'CA', 'CP', 'CS5', 'CT', 'Chappy', 'Crux', 'Crypton', 'Cygnus X', 'DS', 'DSC', 'Drag Star', 'Dt', 'Dtr', 'EC-03', 'FZ1', 'FZ16', 'FZ6', 'FZ6N', 'FZ6R', 'FZ8', 'FZS', 'Fazer', 'Fj', 'Fjr', 'Fz', 'Fzr', 'Fzx', 'G5', 'GT80', 'GTS', 'Giggle', 'Gladiator', 'Grand Axis', 'Grand Majesty', 'Grizzly', 'IT', 'Jog', 'KS', 'LB', 'LS', 'MR50', 'MX', 'Majesty', 'Maxim', 'Maxter', 'Midnight Warrior', 'Morphous', 'Mt-01', 'Mt-03', 'Mt-07', 'Mt-09', 'Mt-10', 'NMAX', 'Neos', 'Night Max', 'PW', 'R 3', 'R 5', 'RX', 'Raider', 'Raptor', 'Rd', 'Riva', 'Road Star', 'Roadliner', 'Royal Star', 'Rs', 'Rz', 'SDR', 'ST', 'SZR', 'Serow', 'Slider', 'Sr', 'Srx', 'Star', 'Stratoliner', 'Stryker', 'T', 'T-max', 'TD', 'TR', 'TRX', 'TX', 'TY', 'TZ', 'Tdm', 'Tdr', 'Tricity', 'Tricker', 'Tt', 'Ttr', 'Tw', 'Tzr', 'U7E', 'V-Max', 'V-Star', 'VMX', 'Versity', 'Vino', 'Virago', 'Vity', 'Vox', 'WF', 'Warrior', 'Why', 'Wolverine', 'Worldcrosser', 'Wr', 'X-City', 'X-max', 'XC', 'XJ', 'XJ6', 'XJR', 'XV', 'XVZ', 'Xenter', 'Xj', 'Xs', 'Xt', 'Xtz', 'Xvs', 'YAS', 'YB', 'YBR', 'YQ', 'YW', 'YX', 'YZF-R1', 'YZF-R6', 'Yfm', 'Yfz', 'Yp', 'Yz', 'Yzf', 'Zuma'],
    'Yawa': ['125', '250', '330', '350', '353', '50', '500', '593', '638', '639', '640', '650', '812', '90', 'Chopper', 'Mustang', 'T'],
    'Yiben': ['YB50QT-15', 'YB50QT-19', 'YB50QT-3', 'YB50QT-4'],
    'Yuki': ['Hs', 'Lb', 'Qs', 'Qt', 'Yk'],
    'Znen': ['FB', 'King', 'Q', 'R8', 'Revival', 'Storm'],
    'Zongshen': ['Zs110-60', 'Zs150gy-10', 'Zs200gy-2'],
    'Zundapp': ['125', '50', 'GS', 'KS'],
    'iO Scooter': ['1500 GT', 'Florenz', 'King Kong', 'Manhattan', 'Vienna'],
    'Восход': ['ВП-150', 'Восход', 'Восход-2', 'Восход-3', 'Вятка'],
    'Вятка': ['150'],
    'Днепр': ['11', '12', '16', 'K', 'KM3', 'MB', 'MT'],
    'Други': [' '],
    'Дунавия': ['125'],
    'Иж': ['350', '49', '5', '56', 'PS-650 Rotax', 'Saigak', 'Springbok', 'Корнет', 'Планета', 'Спорт', 'Юнкер', 'Юпитер'],
    'Карпати': ['Карпати-1', 'Карпати-2'],
    'Ковровец': ['К-125', 'К-175', 'К-55'],
    'Мини мотоциклети': ['Мини мотоциклети'],
    'Минск': ['125'],
    'Поръчкови': ['Cruisers', 'Enduro', 'Naked', 'Retro', 'Scooter', 'Touring', 'Други'],
    'Рига': ['Дельта', 'Рига-1', 'Рига-11', 'Рига-13', 'Рига-16', 'Рига-17С', 'Рига-22', 'Рига-26 Mini Stella', 'Рига-3', 'Рига-4', 'Рига-5', 'Рига-7'],
    'ТМЗ': ['5.951 Тула'],
    'Урал': ['Classic', 'Cosa', 'Cross', 'De Luxe', 'ET2', 'ET4', 'GT', 'GTS', 'GTV', 'Granturismo', 'LX', 'LXV', 'Lux', 'M-63', 'M-66', 'M-67', 'M-67-6', 'M-70', 'PX', 'Patrol', 'Ranger', 'Red October', 'Red Star', 'Retro', 'S', 'Snow Leopard', 'Solo', 'Sportsman', 'T', 'Vespa', 'Zafferano', 'Волк', 'Ворона', 'Вьюга', 'Пустиня', 'Тайга', 'Тройка', 'Турист']
};

const requiredFields = {
    topmenu:'5',
    rub:'1',
    act:'3',
    rub_pub_save:'1',
    f1:'1',
    f2:'5',
    f3:'1',
    f4:'1',
    f5:'', //Brand
    f6:'', //Model
    f7:'', //Price start
    f8:'', //Price end
    f9:'', //Currency
    f10:'',//Year start
    f11:'',//Year end
    f12:'',
    f13:'',
    f14:'',
    f15:'',
    f16:'',
    f17:'',
    f18:'',
    f19:'0',
    f20:'', //Search Type set to newest from past two days
    f21:'', // Searching only for new and used cars
    f22:'',
    f24:'7',
    f25:'01',
    f26:'',
    f27:'',
    f28:'',
    f29:'',
    f30:'',
    f31:'',
};

export default {
    requiredFields: requiredFields,
    brandOptions: {
        hrefValues: {
            brand: 'f5',
            model: 'f6',
        },
        brandsAndModels: models,
    },

    price: {
        scopeData: {
            active: false,
            label: 'Price',
            hrefValues: {
                min: 'f7',
                max: 'f8',
            },
            extraData: {
                max: 30000,
            },
        },
        dropdownData: {
            hrefValue: 'f9',
            options: [
                { value: 'лв.', label: 'лв.' },
                { value: 'USD', label: 'USD' },
                { value: 'EUR', label: 'EUR' },
            ],
            default: 'лв.',
        },
    },
    betweens: [
        {
            active: false,
            label: 'Year',
            hrefValues: {
                min: 'f10',
                max: 'f11',
            },
        },
    ],
    checkboxes: [

        // {
        //     hrefValue: 'f22',
        //     label: 'Has Pictures',
        // },
    ],
};