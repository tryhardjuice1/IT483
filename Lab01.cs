using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("IT 483 Restaurant Guide");

            string response;
            char s, f;
            bool spicy, fancy;

            // Spicy Preference
            Console.WriteLine("Do you like spicy food? (y / n) : ");
            response = Console.ReadLine();
            s = response[0];
            if (s == 'y' || s == 'Y')
            {
                spicy = true;
            }
            else
            {
                spicy = false;
            }

            // Fancy Preference
            Console.WriteLine("Do you want to go to a fancy restaurant? (y / n) : ");
            response = Console.ReadLine();
            f = response[0];
            fancy = (f == 'y') || (f == 'Y');

            // Make suggestion
            if (spicy)
            {
                if(fancy)
                {
                    Console.WriteLine("I suggest you go to Thai Garden Palace.");
                }
                else
                {
                    Console.WriteLine("I suggest you go to Alberto's Tacqueria.");
                }
            }
            else
            {
                if (fancy)
                {
                    Console.WriteLine("I suggest you go to Chez Paris.");
                }
                else
                {
                    Console.WriteLine("I suggest you go to Joe's Diner.");
                }
            }

            Console.Read();
        }
    }
}
