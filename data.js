window.FITMENT_RECORDS = [
['Volkswagen','Golf','Mk5 (1K)',2003,2009,'5x112',57.1,'M14x1.5 ball-seat bolts','15x6 ET47|16x6.5 ET50|17x7 ET54|18x7.5 ET51','195/65R15|205/55R16|225/45R17|225/40R18','Verify exact engine, trim and brake package'],
['Volkswagen','Golf','Mk6 (5K)',2008,2013,'5x112',57.1,'M14x1.5 ball-seat bolts','15x6 ET47|16x6.5 ET50|17x7 ET54|18x7.5 ET51','195/65R15|205/55R16|225/45R17|225/40R18','GTI/R variants may differ'],
['Volkswagen','Golf','Mk7 (5G)',2012,2020,'5x112',57.1,'M14x1.5 ball-seat bolts','15x6 ET43|16x6.5 ET46|17x7 ET49|18x7.5 ET49','195/65R15|205/55R16|225/45R17|225/40R18','GTI/R brake clearance requires verification'],
['Volkswagen','Polo','Mk5 (6R/6C)',2009,2017,'5x100',57.1,'M14x1.5 ball-seat bolts','15x6 ET38|16x6.5 ET43|17x7 ET46','185/60R15|195/55R15|215/45R16|215/40R17','Check exact chassis and brakes'],
['Audi','A3','8P',2003,2013,'5x112',57.1,'M14x1.5 ball-seat bolts','16x6.5 ET50|17x7.5 ET56|18x7.5 ET54','205/55R16|225/45R17|225/40R18','S3/RS3 variants require separate checks'],
['Audi','A3','8V',2012,2020,'5x112',57.1,'M14x1.5 ball-seat bolts','16x7 ET48|17x7.5 ET49|18x7.5 ET51','205/55R16|225/45R17|225/40R18','S3/RS3 variants require separate checks'],
['BMW','3 Series','E90/E91/E92/E93',2005,2013,'5x120',72.6,'M12x1.5 wheel bolts','16x7 ET34|17x8 ET34|18x8 ET34','205/55R16|225/45R17|225/40R18','Staggered setups and M3 are separate applications'],
['BMW','3 Series','F30/F31/F34',2011,2019,'5x120',72.6,'M14x1.25 wheel bolts','16x7 ET31|17x7.5 ET37|18x8 ET34','205/60R16|225/50R17|225/45R18','Wheel-bolt thread differs from E90'],
['Ford','Focus','Mk3',2011,2018,'5x108',63.4,'M12x1.5 nuts','16x7 ET50|17x7 ET50|18x8 ET55','205/55R16|215/50R17|235/40R18','ST variants require separate checks'],
['Ford','Fiesta','Mk7',2008,2017,'4x108',63.4,'M12x1.5 nuts','15x6 ET47.5|16x6.5 ET47.5|17x7 ET47.5','195/55R15|195/45R16|205/40R17','ST variants require separate checks'],
['Vauxhall','Astra','J',2009,2015,'5x105',56.6,'M12x1.5 nuts','16x6.5 ET39|17x7 ET44|18x8 ET46','205/60R16|215/50R17|235/45R18','GTC/OPC variants require separate checks'],
['Nissan','Qashqai','J11',2013,2021,'5x114.3',66.1,'M12x1.25 nuts','17x7 ET40|18x7 ET40|19x7 ET40','215/60R17|215/55R18|225/45R19','Check trim and TPMS configuration'],
['Toyota','Corolla','E210',2018,2025,'5x100',54.1,'M12x1.5 nuts','16x7 ET40|17x7.5 ET40|18x8 ET40','205/55R16|225/45R17|225/40R18','Hybrid and performance variants can differ'],
['Mercedes-Benz','A-Class','W176',2012,2018,'5x112',66.6,'M12x1.5 wheel bolts','16x6.5 ET49|17x7.5 ET49|18x7.5 ET49','205/55R16|225/45R17|225/40R18','AMG variants require separate verification'],
['Skoda','Octavia','Mk3 (5E)',2013,2020,'5x112',57.1,'M14x1.5 ball-seat bolts','16x6.5 ET46|17x7 ET49|18x7.5 ET51','205/55R16|225/45R17|225/40R18','VRS brake clearance requires verification'],
['SEAT','Leon','Mk3 (5F)',2012,2020,'5x112',57.1,'M14x1.5 ball-seat bolts','16x6.5 ET46|17x7 ET49|18x7.5 ET51','205/55R16|225/45R17|225/40R18','Cupra variants require separate checks']
].map(([make,model,generation,start,end,pcd,bore,fastener,wheels,tyres,notes])=>({make,model,generation,start,end,pcd,bore,fastener,wheels:wheels.split('|'),tyres:tyres.split('|'),notes,confidence:'UNVERIFIED STARTER REFERENCE'}));
