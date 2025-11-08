-- Sample data for Maxan Sistemas MVP

USE maxan_sistemas;

-- Insert sample products
INSERT INTO products (nombre, categoria, descripcion, precio, imagenURL) VALUES
('Servidor Dell PowerEdge R750', 'Servidores', 'Servidor empresarial de alto rendimiento con procesadores Intel Xeon', 15000.00, '/images/servidor-dell.jpg'),
('Sistema de Cámaras IP 8MP', 'Cámaras', 'Kit de 4 cámaras IP de 8MP con grabación 4K y visión nocturna', 2500.00, '/images/camaras-ip.jpg'),
('Switch Cisco Catalyst 2960', 'Redes', 'Switch de 24 puertos Gigabit Ethernet para redes empresariales', 1200.00, '/images/switch-cisco.jpg'),
('Licencia Windows Server 2022', 'Software', 'Licencia de servidor para hasta 16 núcleos con CALs incluidas', 800.00, '/images/windows-server.jpg'),
('UPS APC 1500VA', 'Energía', 'Sistema de alimentación ininterrumpida con batería de respaldo', 450.00, '/images/ups-apc.jpg'),
('Mantenimiento Anual de Servidores', 'Servicio', 'Servicio de mantenimiento preventivo y correctivo para servidores', 2500.00, '/images/mantenimiento.jpg');

-- Insert sample blog posts
INSERT INTO blog (titulo, contenido) VALUES
('La Importancia de la Ciberseguridad en las Empresas', 'En la era digital actual, la ciberseguridad se ha convertido en una prioridad fundamental para todas las organizaciones. Las amenazas cibernéticas evolucionan constantemente, y las empresas deben implementar estrategias robustas de protección de datos y sistemas. En Maxan Sistemas, ofrecemos soluciones integrales de ciberseguridad que incluyen firewalls avanzados, sistemas de detección de intrusiones y capacitación especializada para su equipo.'),
('Tendencias en Infraestructura de TI para 2024', 'El año 2024 trae consigo nuevas tendencias en infraestructura de TI que están transformando la forma en que las empresas operan. La adopción de la nube híbrida, la implementación de IA en la gestión de sistemas y el enfoque en la sostenibilidad energética son solo algunas de las tendencias que están marcando el rumbo. Descubra cómo Maxan Sistemas puede ayudarle a mantenerse a la vanguardia tecnológica.'),
('Optimización de Redes Empresariales', 'Una red empresarial eficiente es el backbone de cualquier organización moderna. Desde el diseño inicial hasta el mantenimiento continuo, cada aspecto de la infraestructura de red requiere atención especializada. Nuestros expertos en redes ofrecen servicios de consultoría, implementación y soporte para garantizar que su red sea rápida, segura y escalable.');